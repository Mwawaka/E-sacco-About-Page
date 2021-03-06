/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        lightGreenA: "hsla(144, 42%, 74%, 0.56)",
        lightGreenB: "hsla(104, 37%, 62%, 0.6)",
        navbarColor: "hsla(117, 24%, 85%, 1)",
        navbarLinks: "hsla(0, 0%, 0%, 0.8)",
        paleGreen:'hsla(119, 22%, 85%, 1)',
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// generated by npx tailwindcss init
