/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#383838",
        lavender: "#eeeafd",
        gray: {
          "100": "#212121",
          "200": "rgba(33, 33, 33, 0.6)",
          "300": "rgba(0, 0, 0, 0.87)",
        },
        blueviolet: "#6442ef",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "21xl": "40px",
      },
    },
    fontSize: {
      base: "1rem",
      mini: "0.94rem",
      sm: "0.88rem",
      "2xl": "1.31rem",
      lg: "1.13rem",
      "4xl": "1.44rem",
      "29xl": "3rem",
      "8xl": "1.69rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
