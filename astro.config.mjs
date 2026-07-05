// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://diegobarrioh.dev',
  integrations: [
    // /contact is a redirect stub to /#contact — keep it out of the sitemap.
    sitemap({ filter: (page) => !page.includes('/contact') }),
  ],
});
