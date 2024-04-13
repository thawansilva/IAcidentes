/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redRose: "#e4717a",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
