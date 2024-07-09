/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    },
    colors:{
      primary: "#DDE404",
      secondary: "#EF008F",
      dark: "#1E1E1E",
      darkGray: "#2B2B2B",
      white: "#FFFFFF",
      black: "#000000"
    },
    fontFamily: {
      montBlanc: ["var(--font-montBlanc)"],
      sequel100Wide45: ["sequel100Wide45"],
      sequel100Wide55: ["sequel100Wide55"],
      sequel100Wide65: ["sequel100Wide65"],
      sequel100Wide75: ["sequel100Wide75"],
      sequel100Wide85: ["sequel100Wide85"],
      sequel100Wide95: ["sequel100Wide95"],
      montBlancLight: ["montBlancLight"],
      montBlancRegular: ["montBlancRegular"],
      montBlancSemiBold: ["montBlancSemiBold"],
      montBlancBold: ["montBlancBold"],
      montBlancBlack: ["montBlancBlack"],
      
      
      
      
      
    },
  },
  plugins: [],
}

