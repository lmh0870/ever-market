module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        "noto-sans": ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  darkMode: "class", // media
  plugins: [require("@tailwindcss/forms"), require("tw-elements/dist/plugin")],
};
