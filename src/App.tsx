import { Card } from "@components/Card";
import { Header } from "@components/Header";
import { Seeker } from "@components/Seeker";
import { useTheme } from "@context/themeContext";
import clsx from "clsx";
import { useState } from "react";

function App() {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
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
        <Seeker setSearchTerm={setSearchTerm} />
        <Card />
      </div>
    </main>
  );
}

export default App;
