/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#E8B20E',
        gray: '#8F8e8d',
        secondary: '#4faaff',
        light_primary: '#fff1c9',
      },
    },
  },
  plugins: [],
};
