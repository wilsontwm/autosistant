/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  variants: {
    opacity: ({ after }) => after(['disabled']),
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
