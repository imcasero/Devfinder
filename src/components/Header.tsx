import { useTheme } from "@context/themeContext";
import { Sun, Moon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  setUserData: Dispatch<SetStateAction<any>>;
}

export const Header: React.FC<HeaderProps> = ({ setUserData }) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <header className="w-full flex justify-between align-middle">
      <h1
        className="font-bold text-xl text-primary flex justify-center align-middle"
        onClick={() => {
          setUserData(null);
        }}
      >
        DevFinder
      </h1>
      <button
        className="text-sm text-primary flex items-center justify-center w-8 h-8 rounded-md hover:bg-primary hover:bg-opacity-20 transition"
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
