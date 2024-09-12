/** @type {import('tailwindcss').Config} */

import tailwindcssanimate from 'tailwindcss-animate'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': 'url("/src/assets/bg.jpg")',
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        }
      },
      animation: {
        appear: "appear 0.5s ease-in-out",
      }
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    }
  },
  plugins: [
    tailwindcssanimate
  ]
}