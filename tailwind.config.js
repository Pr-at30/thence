/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'pblack': '#1C1C1C',
      'pwhite': '#FFFFFF',
      'dgray': '#4E4E4E',
      'mgray': '#F1F1F1',
      'lgray': '#F5F5F5',
      'stroke': '#EAEAEA',
      'cgreen': '#2DA950'
    },
    extend: {
      fontFamily: {
        'manrope': 'Manrope',
        'cov': 'Covered By Your Grace'
      }
    }
  },
  plugins: [],
});