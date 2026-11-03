// @ts-check
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

// Static output → dist/. Tailwind 3 is picked up through postcss.config.cjs.
export default defineConfig({
  site: "https://iamprathamesh.xyz",
  integrations: [sitemap()],
})
