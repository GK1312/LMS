import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "100": "25rem",
      },
      maxWidth: {
        "auth-card-sm": "calc(-0.75rem + 100vw)",
        "auth-card-lg": "calc(-5rem + 100vw)",
      },
      flex: {
        social: "0 0 1.25rem",
        hr: "1 1 0%",
      },
      boxShadow: {
        "auth-card": "rgba(0, 0, 0, 0.16) 0px 24px 48px",
      },
      colors: {
        light: "rgba(0, 0, 0, 0.65)",
        dark: "hsla(0, 0%, 0%, 0.48)",
        hr: "rgba(0, 0, 0, 0.16)",
        "light-border": "rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
