/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1800px',
      // => @media (min-width: 1800px) { ... }
    },
    extend: {
      fontFamily: {
        burtons: "burtons"
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 4px rgba(0, 0, 0, 0.20)',
        'inner-light-bezel': 'inset 0 4px 6px rgba(229, 231, 235, 0.4)',
        'inner-dark': 'inset 0 2px 4px rgba(24, 24, 27, 0.50)',
        'inner-dark-bezel': 'inset 0 4px 6px rgba(229, 231, 235, 0.20)',
      },
      animationIterationCount: {
        '1': '1',
      },
      animation: {
        'bounce-fade': 'bounce-fade 0.75s ease-in-out',
      },
      keyframes: {
        'bounce-fade': {
          '0%': { transform: 'translateY(100px)' },
          '50%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-30px)' },
          '75%': { transform: 'translateY(-15px)'},
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.animation-iteration-1': {
          animationIterationCount: '1',
        },
      })
    }
  ],
  darkMode: 'media',
}
