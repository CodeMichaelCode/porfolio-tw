/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#7286A0",
        lightBlue: "#93a2b2",
        darkGray: "#292736",
      },
      fontFamily: {
        headers: ["Roboto Condensed", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
