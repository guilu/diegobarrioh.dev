import test from "node:test";
import assert from "node:assert/strict";

import { eventsForLink, initIntentAnalytics } from "../src/scripts/intent-analytics.js";

test("classifies the primary CTA without exposing its URL or file name", () => {
  const events = eventsForLink({
    href: "https://diegobarrioh.dev/cv/diego-barrio-hortiguela-cv.pdf?token=secret#page=1",
    dataset: { analyticsCta: "hero_cv" },
  });

  assert.deepEqual(events[0], {
    event: "cta_click",
    cta_name: "hero_cv",
  });
  assert.doesNotMatch(JSON.stringify(events), /token|secret|#page|diegobarrioh|hortiguela/);
});

test("classifies email contact without collecting the address", () => {
  const events = eventsForLink({
    href: "mailto:private@example.com?subject=Secret",
    dataset: {},
  });

  assert.deepEqual(events, [
    {
      event: "contact_click",
      contact_method: "email",
    },
  ]);
  assert.doesNotMatch(JSON.stringify(events), /private|example|Secret/);
});

test("emits file_download metadata for supported file links", () => {
  const events = eventsForLink({
    href: "/cv/resume.PDF?signature=private",
    dataset: { analyticsFile: "cv" },
  });

  assert.deepEqual(events, [
    {
      event: "file_download",
      file_type: "cv",
      file_extension: "pdf",
    },
  ]);
});

test("classifies an explicitly marked scheduling contact", () => {
  const events = eventsForLink({
    href: "https://calendly.com/person/30min?utm_secret=value",
    dataset: { analyticsContact: "calendar" },
  });

  assert.deepEqual(events, [
    {
      event: "contact_click",
      contact_method: "calendar",
    },
  ]);
});

test("does not queue intent events before analytics consent", () => {
  let clickHandler;
  const dataLayer = [];
  const link = {
    href: "https://diegobarrioh.dev/cv/resume.pdf",
    dataset: { analyticsCta: "hero_cv" },
  };
  const document = {
    addEventListener(type, handler) {
      if (type === "click") clickHandler = handler;
    },
  };

  initIntentAnalytics({ document, dataLayer, hasAnalyticsConsent: () => false });
  clickHandler({ target: { closest: () => link } });

  assert.deepEqual(dataLayer, []);
});

test("queues classified events after analytics consent", () => {
  let clickHandler;
  const dataLayer = [];
  const link = {
    href: "https://diegobarrioh.dev/cv/resume.pdf",
    dataset: { analyticsCta: "hero_cv" },
  };
  const document = {
    addEventListener(type, handler) {
      if (type === "click") clickHandler = handler;
    },
  };

  initIntentAnalytics({ document, dataLayer, hasAnalyticsConsent: () => true });
  clickHandler({ target: { closest: () => link } });

  assert.deepEqual(dataLayer.map(({ event }) => event), ["cta_click", "file_download"]);
});
