/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: "#09090b",
        secondary: "#1c1c1d",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
        gag: ['Gag'],
        dolce: ['Dolce']
      },
      minHeight: {
        "screen-height": "calc(100vh - 80px)"
      },
      height: {
        "screen-height": "calc(100vh - 80px)"
      }
    },
    screens: {
      xxs:"360px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
