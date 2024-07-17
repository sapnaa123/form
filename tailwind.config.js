/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primaryColor :"#2a9d8f",
        secondryColor: "#ccd5ae"
      },
    },
  },
  plugins: [],
}

