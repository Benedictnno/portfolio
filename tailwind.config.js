/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      md: "768px",
      lg: "976px",
      xl: "1340px",
    },
    extend: {
      colors: {
        lightBg: "#e2ffdf",
        mainColor: "#056503",
      },
    },
  },
  plugins: [],
};
