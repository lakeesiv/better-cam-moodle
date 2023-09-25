import type { Config } from "tailwindcss";

export default {
  content: ["./src/popup/*.html"],
  theme: {
    extend: {
      colors: {
        "bcm-orange": "#EE3C35",
        "bcm-orange-light": "#ff5a38",
      },
      fontFamily: {
        iceland: ["Iceland", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
