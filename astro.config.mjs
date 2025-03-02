// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import favicons from 'astro-favicons';

// https://astro.build/config
export default defineConfig({
  site: 'https://simetra.dev',
  integrations: [icon(), favicons()],
});