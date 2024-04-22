import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      transitionDuration: {
        "3000": "3000ms",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
} satisfies Config;
