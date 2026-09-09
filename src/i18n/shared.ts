// Locale-invariant data: URLs, handles, company names, tech stacks.
// Kept out of the per-locale files so they can never drift apart.

export const SITE_URL = "https://diegobarrioh.dev";
export const EMAIL = "diegobarrioh@gmail.com";
export const CALENDLY_URL = "https://calendly.com/diegobarrioh/30min";
export const CV_PDF = "/cv/diego-barrio-hortiguela-cv.pdf";
export const LINKEDIN_URL = "https://www.linkedin.com/in/diegobarrioh";
export const GITHUB_URL = "https://github.com/guilu";
export const X_URL = "https://x.com/guilu";
export const LAB_URL = "https://backendtothefuture.com";

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
