/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-purple": "#635FC7",
        "medium-grey": "#828fa3",
      },
    },
  },
  plugins: [],
};
