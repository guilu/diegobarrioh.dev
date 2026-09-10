// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://diegobarrioh.dev',
  integrations: [
    // Route-based i18n: English is the default locale and renders unprefixed
    // (`/`, `/cv/`), Spanish is prefixed (`/es/`, `/es/cv/`). Each URL serves a
    // single language, so hreflang alternates are meaningful and Google no
    // longer sees two languages competing on the same document.
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
      // /cv and /projects carry their own content and are indexed. /about is
      // still a thin restatement of the home, so it stays noindex and out of
      // the sitemap. `endsWith` matches both locales.
      filter: (page) => !['/about/', '/contact/'].some((p) => page.endsWith(p)),
    }),
  ],
});
