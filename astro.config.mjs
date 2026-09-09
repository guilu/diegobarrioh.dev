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
      // /about /cv /projects duplicate the home sections and are noindex'd, so
      // keep them out of the sitemap too. `endsWith` matches both locales.
      filter: (page) =>
        !['/about/', '/cv/', '/projects/', '/contact/'].some((p) => page.endsWith(p)),
    }),
  ],
});
