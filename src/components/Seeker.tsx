import { useTheme } from "@context/themeContext";
import clsx from "clsx";

export const Seeker = () => {
  const { theme } = useTheme();
  const borderColorClass =
    theme === "dark"
      ? "border-textSecondary-dark"
      : "border-textSecondary-light";
  return (
    <search>
      <form>
        <input
          type="text"
          name="search"
          id="search"
          className={clsx(
            "w-full border rounded-md py-2 px-4 bg-transparent",
            borderColorClass
          )}
          placeholder="Search github user... "
        />
      </form>
    </search>
  );
};
