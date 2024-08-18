/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'white-100': 'hsl(0, 0%, 100%)',
        'gray-50': ' hsl(0, 0%, 50%)',
        'black-50': 'hsl(0, 0%, 7%)',
        lime: 'hsl(47, 88%, 63%)',
      },
    },
  },
  plugins: [],
};
