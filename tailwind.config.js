/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/screens/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
