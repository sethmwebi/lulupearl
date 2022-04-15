module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadein: 'fadeIn 150ms ease-in-out',
        fadeout: 'fadeOut 500ms ease-in-out',
        storeshow: 'storeShow 1s linear',
        storehide: 'storeHide 1s linear'
      },
      keyframes: {
        fadeIn: {
          '0%': { backgroundColor: 'transparent'},
          '25%': { backgroundColor: 'black', opacity: '0.25'},
          '50%': { backgroundColor: 'black', opacity: '0.5'},
          '75%': { backgroundColor: 'black', opacity: '0.7'},
          '100%': { backgroundColor: 'black', opacity: '0.8'},
        },
        fadeOut: {
          '0%': {backgroundColor: 'black', opacity: '0.8'},
          '50%': {backgroundColor: 'black', opacity: '0.4'},
          '100%': {backgroundColor: 'none'},
        },
        storeShow: {
          '0%': {transform: 'translateY(5px)'},
          '50%': {transform: 'translateY(7px)'},
          '100%': {transform: 'translateY(7px)'},
        },
        storeHide: {
          '0%': { transform: 'translateY(-50px)'},
          '50%': { transform: 'translateY(-100px)'},
          '100%': { transform: 'translateY(-10000px)'},
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide")
  ],
};
