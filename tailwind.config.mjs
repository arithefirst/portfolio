/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          accent: '#4ab090',
          secondary: '#1e6c53',
          primary: '#179b71',
          'base-100': '#1d232a',
          'base-content': '#f5f5f6',
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        'legacy-img': '0 0.5rem 0.5rem 0 rgba(38, 37, 37, 0.541)',
      },
    },
  },
};
