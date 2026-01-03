/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#23a08b",
        "brand-hover": "#B18072",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
