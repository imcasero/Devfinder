import { useTheme } from "@context/themeContext";
import clsx from "clsx";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <main
      className={clsx(
        "min-h-screen",
        theme === "dark"
          ? "bg-background-dark text-textPrimary-dark"
          : "bg-background-light text-textPrimary-light"
      )}
    >
      <button
        onClick={() => {
          toggleTheme();
        }}
      >
        {String(theme)}
      </button>
      <p>Hola desde p</p>
    </main>
  );
}

export default App;
