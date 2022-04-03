module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadein: 'fadeIn 150ms ease-in-out',
        fadeout: 'fadeOut 500ms ease-in-out'
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
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide")
  ],
};
