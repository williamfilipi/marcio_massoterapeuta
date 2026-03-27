/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary:    'var(--color-primary)',
        terracotta: 'var(--color-terracotta)',
        olive:      'var(--color-olive)',
        graphite:   'var(--color-graphite)',
        accent:     'var(--color-accent)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans:  ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
