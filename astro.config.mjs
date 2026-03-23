import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://marciotrombeta.com.br',
  output: 'static',
  integrations: [tailwind()],
});
