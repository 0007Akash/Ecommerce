/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-light-blue": "rgb(207, 226, 234)",
        "custom-white": "white",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom right, rgb(207, 226, 234) 10%, white 50%)",
      },
    },
  },
  plugins: [],
};
