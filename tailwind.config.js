module.exports = {
  purge: [],
  // darkMode: "class", // or 'media' or 'class'
  daisyui: {
    styled: true,
    themes: [
      "kennydark",
      {
        kennylight: {
          primary: "#FEA920",
          "primary-focus": "#fa9604",
          "primary-content": "#000000",
          background: "#fff",
          "secondary-content": "#ffffff",
          accent: "#FEA920",
          "accent-focus": "#fa9604",
          "accent-content": "#000",
          "menu-stroke": "#000"
        }
      },
      {
        kennydark: {
          primary: "#FEA920",
          "primary-focus": "#fa9604",
          "primary-content": "#ffffff",
          background: "#000814",
          "secondary-content": "#ffffff",
          accent: "#FEA920",
          "accent-focus": "#fa9604",
          "accent-content": "#000",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
          "menu-stroke": "#fff"
        }
      }
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false
  },
  theme: {
    extend: {
      // colors: {
      //   red: "#f00",
      //   blue: "#00f"
      // },
      // linearBorderGradients: theme => ({
      //   colors: theme("colors")
      // })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")]
};
