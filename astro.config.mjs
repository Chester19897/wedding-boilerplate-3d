import {defineConfig} from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    compressHTML: true,
  integrations: [react({
      experimentalReactChildren: true,
    }), tailwind({ 
    applyBaseStyles: true,
  })],
    vite: {
      ssr: {
          noExternal: ['react-hook-form']
      }
    }
});
