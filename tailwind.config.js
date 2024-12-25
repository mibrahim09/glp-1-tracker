/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bask: {
          100: "#6796c2",
          200: "#466e94",
        },
        "r-black": {
          100: "#1a1a1a",
        },
        "r-gray": {
          100: "#444444",
          200: "#e1e4e7",
        },
      },
      boxShadow: {
        header: "-6px 9px 14px rgba(0, 0, 0, 0.04)",
      },
      keyframes: {
        pulseFontWeight: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.9" },
        },
        logoSpin: {
          "0%": { transform: "rotate(0deg)" },
          "30%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(00deg)" },
          "80%": { transform: "rotate(-10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        pulseFontWeight: "pulseFontWeight 800ms infinite",
        logoSpin: "logoSpin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
