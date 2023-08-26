/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:'poppins',
        avenir:'Avenir',
        Montserrat:'Montserrat',
        JosefinSans:'Josefin Sans'
      },
      backgroundImage: {
        'login-bg': "url('./assets/loginAssets/Mask Group 4.svg')",
      },
    },
  },
  plugins: [],
}

