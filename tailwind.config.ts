import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "100": "25rem",
        "94": "23.5rem",
      },
      maxWidth: {
        "auth-card-sm": "calc(-0.75rem + 100vw)",
        "auth-card-lg": "calc(-5rem + 100vw)",
        "default-header": "calc(-2rem + 100vw)",
      },
      fontSize: {
        label: "0.8125rem",
        "label-md": "0.85rem",
      },
      flex: {
        social: "0 0 1.25rem",
        hr: "1 1 0%",
        input: "1 1 auto",
      },
      boxShadow: {
        "auth-card": "rgba(0, 0, 0, 0.16) 0px 24px 48px",
        "input-focus": "rgb(145, 167, 247) 0px 0px 0px 1px",
        "input-danger": "rgb(240, 68, 56) 0px 0px 0px 1px",
        "header-default": "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
      },
      colors: {
        light: "rgba(0, 0, 0, 0.65)",
        dark: "hsla(0, 0%, 0%, 0.48)",
        hr: "rgba(0, 0, 0, 0.16)",
        "light-border": "rgba(0, 0, 0, 0.08)",
        accent: "#103FEF",
        "accent-dark": "#0D33BF",
        danger: "rgb(240, 68, 56)",
        "bg-light": "hsla(0, 0%, 0%, 0.04)",
        "main-text": "#161439"
      },
      backgroundImage: {},
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: '#103FEF'
        }
      }
    }
  })],
};
export default config;
