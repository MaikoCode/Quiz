/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors:{
        'violet': "#A729F5",
        'dark-gray': "#313E51",
        'dark-blue-gray': "#3B4D66",
        'gray': "#626C7F",
        'blue': "#ABC1E1",
        'dark-white': "#F4F6FA",
        'white': "#FFFFFF",
        'green': "#26D782",
        'salmon': "#EE5454"
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

