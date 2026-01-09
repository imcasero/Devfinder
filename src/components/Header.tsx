import { useTheme } from "@context/themeContext";
import { Sun, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

export const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const navigate = useNavigate();

  return (
    <header className="w-full flex justify-between items-center animate-slide-down mb-2">
      <h1
        className="font-bold text-2xl flex items-center cursor-pointer text-primary hover:opacity-80 transition-opacity"
        onClick={() => {
          navigate(`/`);
        }}
      >
        DevFinder
      </h1>
      <button
        className={clsx(
          "group flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 hover:scale-105",
          theme === "dark"
            ? "bg-slate-800 border border-slate-700 hover:border-slate-600"
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
