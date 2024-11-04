/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: " 'Poppins', sans-serif "
      },
      textShadow: {
        md: '0 0 5px #ffffff, 0 0 20px #000, 0 0 30px #000'
      }
    },

  },
  plugins: [
    require('daisyui','tailwindcss-textshadow'),
  ],
}

