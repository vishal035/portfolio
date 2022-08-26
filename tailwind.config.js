/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E7E7E5',
        'primary-black': '#2A2A2A',
      },
    },
  },
  plugins: [require('daisyui')],
};
