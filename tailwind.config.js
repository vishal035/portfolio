/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Josefin Sans',
      },
      colors: {
        primary: '#E7E7E5',
        'primary-black': '#06000F',
        'primary-green': '#00FFB2',
        'primary-green-light': '#6CFFD3',
        'primary-purple': '#DB00FF',
        'primary-voilet': '#896CFF',
      },

      animation: {
        'rotateByOrigin-Left': 'rotateByOrigin-Left 8s linear infinite',
        'rotateByOrigin-Right': 'rotateByOrigin-Right 8s linear infinite',
        'rotateByOrigin-Bottom': 'rotateByOrigin-Bottom 8s linear infinite',
      },
      keyframes: {
        'rotateByOrigin-Left': {
          '0%': {
            transform: 'rotate(0deg)',
            'transform-origin': 'top right',
          },
          '50%': {
            transform: 'rotate(180deg)',
            // 'transform-origin': 'top right',
          },
          '100%': {
            transform: 'rotate(360deg)',
            'transform-origin': 'top right',
          },
        },
        'rotateByOrigin-Right': {
          '0%': {
            transform: 'rotate(0deg)',
            'transform-origin': 'bottom right',
          },
          '50%': {
            transform: 'rotate(180deg)',
            // 'transform-origin': 'top right',
          },
          '100%': {
            transform: 'rotate(360deg)',
            'transform-origin': 'bottom right',
          },
        },
        'rotateByOrigin-Bottom': {
          '0%': {
            transform: 'rotate(0deg)',
            'transform-origin': 'bottom left',
          },
          '50%': {
            transform: 'rotate(180deg)',
            // 'transform-origin': 'top right',
          },
          '100%': {
            transform: 'rotate(360deg)',
            'transform-origin': 'bottom left',
          },
        },
      },
    },
  },
  plugins: [],
};
