/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  mode: 'jit',
  theme: {
    // Fluid container: full width with side gutters, capped at 1440px on
    // wide screens instead of snapping to every breakpoint width.
    container: {
      center: true,
      // responsive gutters live in src/index.css (padding keys here only
      // apply at container.screens, which we cap to a single max width)
      padding: "1.25rem",
      screens: {
        max: "1440px",
      },
    },
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
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
