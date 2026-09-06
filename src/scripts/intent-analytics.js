const DOWNLOAD_EXTENSIONS = new Set([
  "7z", "avi", "csv", "doc", "docx", "exe", "gz", "key", "mid", "midi", "mov", "mp3",
  "mp4", "mpe", "mpeg", "pdf", "pkg", "pps", "ppt", "pptx", "rar", "rtf", "txt", "wav",
  "wma", "wmv", "xls", "xlsx", "zip",
]);

export const eventsForLink = ({ href, dataset = {} }) => {
  const events = [];

  if (dataset.analyticsCta) {
    events.push({
      event: "cta_click",
      cta_name: dataset.analyticsCta,
    });
  }

  if (href.toLowerCase().startsWith("mailto:") || dataset.analyticsContact) {
    events.push({
      event: "contact_click",
      contact_method: dataset.analyticsContact || "email",
    });
  }

  const url = new URL(href, "https://diegobarrioh.dev");
  const fileName = decodeURIComponent(url.pathname.split("/").pop() || "");
  const fileExtension = fileName.includes(".") ? fileName.split(".").pop().toLowerCase() : "";
  if (DOWNLOAD_EXTENSIONS.has(fileExtension)) {
    events.push({
      event: "file_download",
      file_type: dataset.analyticsFile || "other",
      file_extension: fileExtension,
    });
  }

  return events;
};

export const hasGrantedAnalyticsConsent = (consentEntry) => {
  if (!consentEntry) return false;
  for (const decision of ["update", "default", "declare", "implicit"]) {
    if (typeof consentEntry[decision] === "boolean") return consentEntry[decision];
  }
  return false;
};

export const initIntentAnalytics = ({ document, dataLayer, hasAnalyticsConsent }) => {
  document.addEventListener("click", (clickEvent) => {
    if (!hasAnalyticsConsent()) return;

    const link = clickEvent.target?.closest?.("a[href]");
    if (!link) return;

    eventsForLink(link).forEach((event) => dataLayer.push(event));
  });
};
