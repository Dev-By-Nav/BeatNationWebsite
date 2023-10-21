/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'bn-navy': '#0c1337',
      'bn-gold': '#d4af37',

    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      open: ['Open Sans', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
    },
  },
  },
  plugins: [],
}


