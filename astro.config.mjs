import sitemap from '@astrojs/sitemap';
// @ts-check

import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://mitrasupplyspace.my.id',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
