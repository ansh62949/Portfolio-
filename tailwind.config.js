/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        primary: {
          DEFAULT: "#10b981", // Emerald
          glow: "rgba(16, 185, 129, 0.5)",
        },
        secondary: {
          DEFAULT: "#0ea5e9", // Sky
          glow: "rgba(14, 165, 233, 0.5)",
        },
        accent: "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
}
