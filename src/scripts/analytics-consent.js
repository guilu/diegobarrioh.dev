export const ANALYTICS_CONSENT_KEY = "analytics_consent";

export const getAnalyticsConsent = (storage) => {
  try {
    const value = storage.getItem(ANALYTICS_CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
};

const storeDecision = (storage, decision) => {
  try {
    storage.setItem(ANALYTICS_CONSENT_KEY, decision);
  } catch {
    // A blocked/full storage must never turn into implicit consent.
  }
};

const gaCookieNames = (document) =>
  document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));

const cookieDomains = (hostname) => {
  const parts = hostname.split(".").filter(Boolean);
  const domains = new Set([hostname, `.${hostname}`]);
  if (parts.length >= 2) domains.add(`.${parts.slice(-2).join(".")}`);
  return domains;
};

export const deleteAnalyticsCookies = (document, hostname) => {
  for (const name of gaCookieNames(document)) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    for (const domain of cookieDomains(hostname)) {
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${domain}; SameSite=Lax`;
    }
  }
};

export const createAnalyticsConsent = ({ window, document, storage, gtmId }) => {
  const dataLayer = (window.dataLayer = window.dataLayer || []);
  let loaded = false;

  const gtag = (...args) => dataLayer.push(args);

  const load = () => {
    if (loaded) return;
    loaded = true;
    gtag("consent", "default", { analytics_storage: "granted" });
    dataLayer.push({
      traffic_type:
        window.location.hostname === "localhost" || storage.getItem("internal_traffic") === "true"
          ? "internal"
          : "external",
    });
    dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
    script.dataset.analyticsLoader = "gtm";
    document.head.append(script);
  };

  const hasGranted = () => getAnalyticsConsent(storage) === "granted";

  return {
    hasGranted,
    start() {
      if (hasGranted()) load();
    },
    grant() {
      storeDecision(storage, "granted");
      load();
      document.dispatchEvent?.(new CustomEvent("analytics-consent-change", { detail: "granted" }));
    },
    deny() {
      storeDecision(storage, "denied");
      if (loaded) gtag("consent", "update", { analytics_storage: "denied" });
      document.querySelectorAll('script[data-analytics-loader="gtm"]').forEach((script) => script.remove());
      deleteAnalyticsCookies(document, window.location.hostname);
      document.dispatchEvent?.(new CustomEvent("analytics-consent-change", { detail: "denied" }));
    },
  };
};
