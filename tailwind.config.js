/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      'primary': '#E1C39F',
      'secondary': '#f9fafb',
      'darker-blue': '#151e25',
      'dark-blue': '#133d55',
      'gray-900': '#111827',
    },
    extend: {},
  },
  plugins: [],
}
