import { useTheme } from "@context/themeContext";
import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const navigate = useNavigate();

  return (
    <header className="w-full flex justify-between items-center animate-slide-down mb-2">
      <button
        type="button"
        className={clsx(
          "font-bold text-2xl flex items-center cursor-pointer hover:opacity-80 transition-opacity",
          theme === "dark" ? "text-white" : "text-primary"
        )}
        onClick={() => {
          navigate(`/`);
        }}
      >
        DevFinder
      </button>
      <button
        type="button"
        className={clsx(
          "group flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 hover:scale-105",
          theme === "dark"
            ? "bg-neutral-900 border border-neutral-800 hover:border-neutral-700"
            : "bg-white border border-gray-200 hover:border-gray-300"
        )}
        onClick={() => {
          toggleTheme();
        }}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-200" />
        ) : (
          <Moon className="w-5 h-5 text-primary group-hover:-rotate-12 transition-transform duration-200" />
        )}
      </button>
    </header>
  );
};
