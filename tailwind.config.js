/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{svelte,js,ts}"],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          accent: "#4fb595",
          secondary: "#93e1c9",
          primary: "#64e8be",
          "base-100": "#f5f9f7",
        },
        dark: {
          accent: "#4ab090",
          secondary: "#1e6c53",
          primary: "#179b71",
          "base-100": "#1d232a",
          "base-content": "#f5f5f6",
        },
      },
    ],
  },
};
