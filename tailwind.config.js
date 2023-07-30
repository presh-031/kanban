/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-purple": "#635FC7",
        "main-purple-hover": "#A8A4FF",

        "light-grey": "#F4F7FD",
        "medium-grey": "#828fa3",

        "lines-light": "#E4EBFA",

        black: "#000112",
      },
    },
  },
  plugins: [],
};
