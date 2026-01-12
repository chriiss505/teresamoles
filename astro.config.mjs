// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://chriiss505.github.io",
  output: "static",
  integrations: [tailwind()],
});
