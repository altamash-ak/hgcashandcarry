/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.php"],
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito Sans',sans-serif",
      },
      colors: {
        blue: "#2a2e5d",
        purple: "#673147",
      },
    },
  },
  plugins: [],
};