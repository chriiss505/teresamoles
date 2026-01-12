/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx}", // todos tus archivos
  ],
  theme: { extend: {} },
  plugins: [require("@midudev/tailwind-animations")],
};
