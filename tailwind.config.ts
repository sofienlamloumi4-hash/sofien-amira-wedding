import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],

  theme: {
    extend: {
      colors: {
        gold: "#c9a227",
      },

      fontFamily: {
        arabic: ["Tajawal", "Arial"],
      },
    },
  },

  plugins: [],
};

export default config;
