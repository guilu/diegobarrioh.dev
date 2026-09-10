// @ts-check
import { copyFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Astro names its sitemap index `sitemap-index.xml`, but `/sitemap.xml` is what
 * people type first — Search Console included, where the wrong guess is stored
 * and keeps reporting a fetch error until someone deletes it.
 *
 * This copies the generated index to `/sitemap.xml` so both resolve. It copies
 * rather than hand-writing the XML so the alias can never drift from the real
 * index, however many chunk files the integration ends up emitting.
 *
 * Must be listed after `sitemap()`: build hooks run in integration order and
 * the file has to exist before it can be copied.
 *
 * @returns {import('astro').AstroIntegration}
 */
function sitemapAlias() {
  return {
    name: 'sitemap-alias',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        try {
          await copyFile(new URL('sitemap-index.xml', dir), new URL('sitemap.xml', dir));
          logger.info('`sitemap.xml` alias written');
        } catch (error) {
          const reason = error instanceof Error ? error.message : String(error);
          logger.warn(`could not write the \`sitemap.xml\` alias: ${reason}`);
        }
      },
    },
  };
}

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
    sitemapAlias(),
  ],
});
