/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#F9FAFB",
          dark: "#0F172A",
        },
        textPrimary: {
          light: "#1F2937",
          dark: "#F9FAFB",
        },
        textSecondary: {
          light: "#6B7280",
          dark: "#9CA3AF",
        },
        borderColor: {
          light: "#E5E7EB",
          dark: "#334155",
        },
        primary: "#6366F1",
        secondary: "#8B5CF6",
        accent: "#EC4899",
        buttonText: {
          light: "#FFFFFF",
          dark: "#000000",
        },
      },
      animation: {
        "slide-up": "slideUp 0.4s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
