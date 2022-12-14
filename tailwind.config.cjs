/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#38bdf8',
        'secondary': '#64748b',
        'light': '#f9fafb',
        'dark': '#1f2937'
      }
    },
  },
  plugins: [],
}