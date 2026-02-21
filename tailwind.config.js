/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#4D5BDE",
          lightBlue: "#6C7AF0",
          darkBlue: "#3241BD",
          purple: "#EABAE9",
          orange: "#F5A66A",
          dark: "#111827",
          surface: "#FAFAFC", // soft background for clay world
          surfaceAlt: "#F0F2F9",
        },
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        mono: ["DM Mono", "monospace"],
        display: ["Fraunces", "serif"],
      },
      boxShadow: {
        // Claymorphism shadows
        "clay-base":
          "inset 0 -4px 0 rgba(0,0,0,0.15), 0 8px 32px rgba(0,0,0,0.1)",
        "clay-sm":
          "inset 0 -2px 0 rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)",
        "clay-button":
          "inset 0 -4px 0 rgba(0,0,0,0.2), 0 4px 14px rgba(0,0,0,0.15)",
        "clay-button-active":
          "inset 0 -2px 0 rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.15)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
