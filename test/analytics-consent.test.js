import test from "node:test";
import assert from "node:assert/strict";

import {
  ANALYTICS_CONSENT_KEY,
  createAnalyticsConsent,
  getAnalyticsConsent,
} from "../src/scripts/analytics-consent.js";

const memoryStorage = (initial = {}) => {
  const values = new Map(Object.entries(initial));
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
};

const browserHarness = (initial = {}) => {
  const appended = [];
  const removed = [];
  const cookieWrites = [];
  const storage = memoryStorage(initial);
  const document = {
    cookie: "_ga=GA1.1.1; _ga_ABC=GS1.1.1; session=keep",
    head: { append: (element) => appended.push(element) },
    createElement: () => ({ dataset: {} }),
    querySelectorAll: () => [{ remove: () => removed.push("script") }],
  };
  Object.defineProperty(document, "cookie", {
    get: () => "_ga=GA1.1.1; _ga_ABC=GS1.1.1; session=keep",
    set: (value) => cookieWrites.push(value),
  });
  const window = { dataLayer: [], location: { hostname: "www.diegobarrioh.dev" } };
  return { appended, cookieWrites, document, removed, storage, window };
};

test("requires an explicit persisted grant", () => {
  assert.equal(getAnalyticsConsent(memoryStorage()), null);
  assert.equal(getAnalyticsConsent(memoryStorage({ [ANALYTICS_CONSENT_KEY]: "denied" })), "denied");
  assert.equal(getAnalyticsConsent(memoryStorage({ [ANALYTICS_CONSENT_KEY]: "granted" })), "granted");
  assert.equal(getAnalyticsConsent(memoryStorage({ [ANALYTICS_CONSENT_KEY]: "unexpected" })), null);
});

test("does not create GTM resources before a decision or after rejection", () => {
  for (const initial of [{}, { [ANALYTICS_CONSENT_KEY]: "denied" }]) {
    const harness = browserHarness(initial);
    createAnalyticsConsent({ ...harness, gtmId: "GTM-TEST" }).start();
    assert.equal(harness.appended.length, 0);
    assert.deepEqual(harness.window.dataLayer, []);
  }
});

test("acceptance persists consent and dynamically loads GTM once", () => {
  const harness = browserHarness();
  const consent = createAnalyticsConsent({ ...harness, gtmId: "GTM-TEST" });

  consent.grant();
  consent.grant();

  assert.equal(harness.storage.getItem(ANALYTICS_CONSENT_KEY), "granted");
  assert.equal(harness.appended.length, 1);
  assert.equal(harness.appended[0].src, "https://www.googletagmanager.com/gtm.js?id=GTM-TEST");
  assert.deepEqual(harness.window.dataLayer[0], ["consent", "default", { analytics_storage: "granted" }]);
});

test("a persisted grant loads GTM on the next visit", () => {
  const harness = browserHarness({ [ANALYTICS_CONSENT_KEY]: "granted" });
  createAnalyticsConsent({ ...harness, gtmId: "GTM-TEST" }).start();
  assert.equal(harness.appended.length, 1);
});

test("rejection is persisted without loading GTM", () => {
  const harness = browserHarness();
  createAnalyticsConsent({ ...harness, gtmId: "GTM-TEST" }).deny();
  assert.equal(harness.storage.getItem(ANALYTICS_CONSENT_KEY), "denied");
  assert.equal(harness.appended.length, 0);
});

test("withdrawal denies future events, removes the loader and expires GA cookies", () => {
  const harness = browserHarness({ [ANALYTICS_CONSENT_KEY]: "granted" });
  const consent = createAnalyticsConsent({ ...harness, gtmId: "GTM-TEST" });
  consent.start();
  consent.deny();

  assert.equal(consent.hasGranted(), false);
  assert.equal(harness.removed.length, 1);
  assert.ok(harness.cookieWrites.some((value) => value.startsWith("_ga=")));
  assert.ok(harness.cookieWrites.some((value) => value.startsWith("_ga_ABC=")));
  assert.ok(harness.cookieWrites.every((value) => !value.startsWith("session=")));
  assert.deepEqual(harness.window.dataLayer.at(-1), ["consent", "update", { analytics_storage: "denied" }]);
});
