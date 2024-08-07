/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons"
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 4px rgba(0, 0, 0, 0.20)',
        'inner-light-hover': 'inset 0 2px 4px rgba(0, 0, 0, 0.30)',
        'inner-dark': 'inset 0 2px 4px rgba(24, 24, 27, 0.50)',
        'inner-dark-hover': 'inset 0 2px 4px rgba(24, 24, 27, 0.60)',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [],
  darkMode: 'media',
}
