import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textPrimary: "#3F3F46",
        textSecondary: "#71717A",
      },
      fontFamily: {
        sf: ["SF Pro Text", "sans-serif"],
      },
      screens: {
        "3xl": "1900px",
      },
    },
  },
  plugins: [],
} satisfies Config;
