module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#dbd9d7",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
