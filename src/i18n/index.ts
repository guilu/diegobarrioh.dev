import type { Content, Locale } from "./types";
import en from "./en";
import es from "./es";
import { CV_PDF, CV_PDF_ES } from "./shared";

export type { Content, Locale };

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "es"];

const content: Record<Locale, Content> = { en, es };

export function getContent(locale: Locale): Content {
  return content[locale];
}

/**
 * Static paths for the `[...locale]` routes.
 * The default locale renders unprefixed (`/about/`); every other locale is
 * prefixed (`/es/about/`).
 */
export function localeStaticPaths() {
  return locales.map((locale) => ({
    params: { locale: locale === defaultLocale ? undefined : locale },
    props: { locale },
  }));
}

/**
 * Turn a canonical, locale-free path ("/", "/cv/") into the URL for `locale`.
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === "/" ? `/${locale}/` : `/${locale}${clean}`;
}

/** Every locale variant of `path`, for hreflang alternates. */
export function alternatesFor(path: string) {
  return locales.map((locale) => ({ locale, path: localizePath(path, locale) }));
}

/** The CV PDF matching a locale. */
export function cvPdfPath(locale: Locale): string {
  return locale === "es" ? CV_PDF_ES : CV_PDF;
}

/** BCP 47 tag used in `hreflang` and the `<html lang>` attribute. */
export const htmlLang: Record<Locale, string> = { en: "en", es: "es" };
