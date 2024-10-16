import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        subtleNeon: {
          "0%, 100%": {
            boxShadow:
              "0 0 5px rgba(58, 123, 253, 0.7), 0 0 10px rgba(0, 204, 255, 0.6)",
          },
          "50%": {
            boxShadow:
              "0 0 10px rgba(58, 123, 253, 0.4), 0 0 20px rgba(0, 204, 255, 0.5)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        slideIn: "slideIn 0.5s ease-out",
        subtleNeon: "subtleNeon 3s ease-in-out infinite",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["sunset"],
  },
  plugins: [daisyui],
};

export default config;

