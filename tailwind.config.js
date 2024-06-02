/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '30rem': '30rem',
        '90vh': '90vh',
      },
      screens: {
        'max-600': {'max': '425px'},
        'max-600': {'max': '600px'},

      }
    },
  },
  plugins: [],
}

