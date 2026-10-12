/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF2FF",
          500: "#526FC4",
          700: "#263F8C",
        },
        surface: "#F7F8FC",
        ink: "#19243B",
      },
    },
  },
  plugins: [],
};
