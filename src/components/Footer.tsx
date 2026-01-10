import { Github } from "lucide-react";
import { useTheme } from "@context/themeContext";
import clsx from "clsx";

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="m-auto md:w-[767px] h-fit py-5 px-4 flex justify-between">
      <p className={clsx(theme === "dark" ? "text-gray-400" : "text-gray-600")}>
        Developed by{" "}
        <a
          target="_blank"
          href="http://imcasero.dev"
          className={clsx(
            "font-bold cursor-pointer hover:opacity-80 transition-opacity",
            theme === "dark" ? "text-white" : "text-primary"
          )}
        >
          @imcasero.dev
        </a>{" "}
        with 💜
      </p>
      <a
        href="https://github.com/imcasero/devfinder"
        target="_blank"
        className={clsx(
          "p-1 rounded-md transition-colors",
          theme === "dark"
            ? "hover:bg-neutral-800 text-gray-400 hover:text-white"
            : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
        )}
      >
        <Github />
      </a>
    </footer>
  );
};
