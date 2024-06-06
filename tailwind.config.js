/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "classic",
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
