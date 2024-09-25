/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: ['./src/**/*.{svelte,js,ts}'],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#4fb595",
          "secondary": "#93e1c9",
          "accent": "#64e8be",
          "base-100": "#f5f9f7",
        },
        dark: {
          "primary": "#4ab090",
          "secondary": "#1e6c53",
          "accent": "#179b71",
          "base-100": "#1d232a",
        },
      },
    ],
  },
}

