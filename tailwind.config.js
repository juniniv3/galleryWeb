/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#009FB7',
        secondary: '#FED766',
        danger: '#FE4A49',
        base: '#E6E6EA',
        base2: '#F4F4F8',
        white: '#fff',
        black: '#000',
      },
    },
  },
  plugins: [],
}