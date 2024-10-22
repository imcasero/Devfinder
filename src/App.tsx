import { Header } from "@components/Header";
import { useTheme } from "@context/themeContext";
import clsx from "clsx";

function App() {
  const { theme } = useTheme();
  return (
    <main
      className={clsx(
        "min-h-screen ",
        theme === "dark"
          ? "bg-background-dark text-textPrimary-dark"
          : "bg-background-light text-textPrimary-light"
      )}
    >
      <div className="flex flex-col gap-5 w-full px-4 py-5 m-auto md:w-[767px]">
        <Header />
      </div>
    </main>
  );
}

export default App;
