module.exports = {
  purge: [],
  //   darkMode: "class", // or 'media' or 'class'
  daisyui: {
    styled: true,
    themes: [
      {
        kennydark: {
          primary: "#FEA920",
          "primary-focus": "#fa9604",
          "primary-content": "#ffffff",
          bg: "#000814",
          "secondary-content": "#ffffff",
          accent: "#FEA920",
          "accent-focus": "#fa9604",
          "accent-content": "#000",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724"
        }
      }
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false
  },
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("daisyui")]
};
