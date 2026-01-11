// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://chriiss505.github.io",
  base: "/teresamoles", // Solo si es repositorio de proyecto, no user/organization pages
});
