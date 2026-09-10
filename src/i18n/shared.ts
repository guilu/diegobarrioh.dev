// Locale-invariant data: URLs, handles, company names, tech stacks.
// Kept out of the per-locale files so they can never drift apart.

export const SITE_URL = "https://diegobarrioh.dev";
export const EMAIL = "diegobarrioh@gmail.com";
export const CALENDLY_URL = "https://calendly.com/diegobarrioh/30min";
/**
 * Both PDFs are printed from the CV page by `npm run cv:pdf`. English keeps the
 * original path because that link is already out in the world; Spanish is a
 * suffixed sibling.
 */
export const CV_PDF = "/cv/diego-barrio-hortiguela-cv.pdf";
export const CV_PDF_ES = "/cv/diego-barrio-hortiguela-cv-es.pdf";
export const LINKEDIN_URL = "https://www.linkedin.com/in/diegobarrioh";
export const GITHUB_URL = "https://github.com/guilu";
export const X_URL = "https://x.com/guilu";
export const LAB_URL = "https://backendtothefuture.com";
export const AKADEMIA_URL = "https://akademia.diegobarrioh.dev";
export const TOKENMETER_URL = "https://tokenmeter.backendtothefuture.com";
export const FORMA_URL = "https://forma.diegobarrioh.dev";

export const socials = [
  { ico: "in", label: "LinkedIn", handle: "in/diegobarrioh", href: LINKEDIN_URL },
  { ico: "gh", label: "GitHub", handle: "github.com/guilu", href: GITHUB_URL },
  { ico: "✕", label: "X / Twitter", handle: "x.com/guilu", href: X_URL },
  { ico: "@", label: "Email", handle: EMAIL, href: `mailto:${EMAIL}` },
];

export const companies = [
  "Europcar Mobility Group",
  "Accenture",
  "Banco Sabadell",
  "SABIS",
  "Caja Mediterráneo",
];

/**
 * The lab site serves Spanish unprefixed and English under `/en/`, the mirror
 * image of this site. Build the URL from the locale rather than storing both.
 */
export function labArticleUrl(slug: string, locale: "en" | "es"): string {
  return locale === "en" ? `${LAB_URL}/en/blog/${slug}/` : `${LAB_URL}/blog/${slug}/`;
}
