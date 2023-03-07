/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        'blues': "#2F80ED",
        'black': {
          100: "#E0E0E0",
          200: "#828282", 
          300: "#4F4F4F", 
          400: "#333333", 
        }
      },
      width: {
        'matt': '52%',
      }
    },
  },
  plugins: [],
}
