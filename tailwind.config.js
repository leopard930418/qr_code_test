/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        LightGray: "hsl(212, 45%, 89%)",
        GrayishBlue: "hsl(220, 15%, 55%)",
        DarkBlue: "hsl(218, 44%, 22%)",
      },
      fontFamily: {
        OutfitBlack: "OutfitBlack",
        OutfitBold: "OutfitBold",
        OutfitExtraBold: "OutfitExtraBold",
        OutfitExtraLight: "OutfitExtraLight",
        OutfitLight: "OutfitLight",
        OutfitMedium: "OutfitMedium",
        OutfitSemiBold: "OutfitSemiBold",
        OutfitThin: "OutfitThin",
        OutfitRegular: "OutfitRegular",
      },
      backgroundImage: {
        qrback: "url('/src/assets/images/QRback.png')",
      },
    },
  },
  plugins: [],
};
