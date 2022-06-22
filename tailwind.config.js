/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "dash-primary": colors.lime[500],
      "dash-primary-light": colors.lime[300],
      "dash-primary-dark": colors.lime[600],
      "dash-primary-hover": colors.lime[400],
      "dash-secondary": colors.rose[500],
      "dash-secondary-light": colors.rose[300],
      "dash-secondary-dark": colors.rose[700],
      "dash-secondary-hover": colors.rose[400],
      "dash-gray-lighter": colors.zinc[100],
      "dash-gray-light": colors.zinc[400],
      "dash-gray": colors.zinc[500],
      "dash-gray-dark": colors.zinc[700],
      "dash-gray-darker": colors.zinc[900],
      "dash-background-dark": colors.zinc[800],
      "dash-alert": colors.amber[400],
      "dash-info": colors.blue[600],
      "dash-success": colors.green[500],
      "dash-error": colors.red[600],
      "dash-details": colors.purple[500],
    },
  },
  plugins: [],
};
