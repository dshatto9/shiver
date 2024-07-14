/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Oswald", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "background-image": "url(/assets/collage.jpg)",
      },
    },
  },
  plugins: [],
};
