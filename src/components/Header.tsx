import { useTheme } from "@context/themeContext";
import { Sun, Moon } from "lucide-react";
export const Header = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <header className="w-full flex justify-between align-middle">
      <h1 className="font-bold text-xl text-primary">Devfinder</h1>
      <button
        className="text-sm text-primary flex items-center justify-center w-8 h-8 rounded-md  hover:bg-primary hover:text-white transition"
        onClick={() => {
          toggleTheme();
        }}
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </button>
    </header>
  );
};
