/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: { max: '600px' },
        md: { min: '601px', max: '768px' },
        lg: { min: '769px', max: '991px' },
      },
    },
  },
  plugins: [],
}
