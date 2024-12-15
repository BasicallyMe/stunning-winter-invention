import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand_primary: "#3D52A0",
        brand_secondary: "#7091E6",
        brand_gray_light: "#ADBBDA",
        brand_white: "#EDE8F5"
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite'
      },
      keyframes: {
        spin: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)'}
        }
      },
      fontFamily: {
        sans: [
          'Inter', ...defaultTheme.fontFamily.sans,
        ]
      }
    },
  },
  plugins: [],
};
