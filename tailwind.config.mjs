/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary:    '#FCF9F5',
        terracotta: '#BC7C67',
        olive:      '#F1E6D9',
        graphite:   '#2D2E2B',
        accent:     '#F1E6D9',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans:  ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
