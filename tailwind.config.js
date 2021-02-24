module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D6484",
        secondary: "#0B90C2",
        textBG: "rgba(0, 0, 0, 0.8)",
        serviceBG: "rgba(0, 0, 0, 0.25)",
        navBG: "rgba(255, 255, 255, 0.98)",
      },
      height: {
        banner: "680px",
      },
      maxHeight: {
        banner: "680px",
      },
      boxShadow: {
        partner: "0 0 8px rgb(0 0 0 / 10%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
}
