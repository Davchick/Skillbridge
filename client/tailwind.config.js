/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#ff9500",
          700: "#FFBF66",
          750: "#FFCA80",
          800: "#FFD499",
          900: "#FFEACC",
          950: "#FFF4E5",
          970: "#FFF9F0",
          990: "#FFFDFA",
        },
        light: {
          DEFAULT: "#E4E4E7",
          950: "#F1F1F3",
          970: "#F7F7F8",
          990: "#FCFCFD",
        },
        dark: {
          DEFAULT: "#191919",
          150: "#262626",                                           
          200: "#333333 ",
          300: "#4C4C4D",
          350: "#59595A",
          400: "#656567",
          600: "#98989A",
          700: "#B3B3B3",
        },
      },
    },
  },
  plugins: [],
};
