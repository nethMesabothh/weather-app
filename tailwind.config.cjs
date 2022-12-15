/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "10xl": "3px 3px 0px 0px  rgba(55,255,255,1)",
      },
      backgroundImage: {
        photo: "url(../../public/background-card.jpg)",
      },
    },
    fontFamily: {
      Inco: "'Inconsolata', monospace",
    },
  },
  plugins: [],
};
