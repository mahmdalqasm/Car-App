/* eslint-env node */
/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ['./src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}
