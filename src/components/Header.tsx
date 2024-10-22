import { useTheme } from "@context/themeContext";
export const Header = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <header className="w-full flex justify-between align-middle">
      <h1 className="font-bold text-xl text-primary">Devfinder</h1>
      <button
        className="text-base text-primary border-2 border-primary w-20 h-8 rounded-lg"
        onClick={() => {
          toggleTheme();
        }}
      >
        {String(theme).charAt(0).toUpperCase() + String(theme).slice(1)}
      </button>
    </header>
  );
};
