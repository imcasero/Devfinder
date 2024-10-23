import { useTheme } from "@context/themeContext";
import clsx from "clsx";
import { useState, FormEvent } from "react";

interface SeekerProps {
  setSearchTerm: (term: string) => void;
}

export const Seeker = ({ setSearchTerm }: SeekerProps) => {
  const { theme } = useTheme();
  const [inputValue, setInputValue] = useState("");

  const borderColorClass =
    theme === "dark" ? "border-borderColor-dark" : "border-borderColor-light";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          value={inputValue}
          onChange={handleInputChange}
          className={clsx(
            "w-full border rounded-md py-2 px-4 bg-transparent",
            borderColorClass
          )}
          placeholder="Search github user... "
        />
      </form>
    </div>
  );
};
