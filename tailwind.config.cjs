/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#5E0000",
        // TEXT
        "gray-500": "#5E0000",
        // DARKER BACKGROUND
        "primary-100": "#C58940",
        "primary-300": "#FFEFC4",
        // HIGHLIGHTED TEXT
        "primary-500": "#262626",
        "secondary-400": "#F7B76B",
        "secondary-500": "#F59B29",
        // LIGHTER BACKGROUND
        "tertiary-100": "#FAEAB1",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        managetext: "url('./assets/ManageText.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
