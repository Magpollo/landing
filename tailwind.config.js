const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', ...fontFamily.sans],
        mono: ['var(--font-hack)', ...fontFamily.mono],
      },
      colors: {
        cream: '#FFFCE4',
        red: '#CE4257',
        black: '#040F0F',
        darkRed:'#B93B4E',
        lightBlue: '#EEF6FF',
        white:'#fff'
      },
      content: {
        quote: 'url("../public/quote.svg")',
      },
    },
  },
  plugins: [],
};
