// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://diegobarrioh.dev',
  integrations: [
    // Home is the single canonical URL. /about /cv /projects duplicate the home
    // sections and are noindex'd, so keep them out of the sitemap too.
    sitemap({
      filter: (page) =>
        !['/about/', '/cv/', '/projects/', '/contact/'].some((p) => page.endsWith(p)),
    }),
  ],
});
