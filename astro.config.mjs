import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cctvstretton.com.au',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
