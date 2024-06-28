/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111',
        secondary: '#7843e9',
        tertiary: '#555',
        light: '#333',

      }
    },
  },
  plugins: [],
}

