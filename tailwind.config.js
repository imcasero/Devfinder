/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#FFFFFF",
          dark: "#000000",
        },
        textPrimary: {
          light: "#000000",
          dark: "#FFFFFF",
        },
        textSecondary: {
          light: "#4B5563",
          dark: "#9CA3AF",
        },
        primary: "#5664F5",
        buttonText: {
          light: "#FFFFFF",
          dark: "#000000",
        },
      },
    },
  },
  plugins: [],
};
