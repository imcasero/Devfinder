import { useTheme } from "@context/themeContext";
import clsx from "clsx";
import { useState, FormEvent } from "react";
import { Search } from "lucide-react";

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
      <form
        onSubmit={handleSubmit}
        className={clsx(
          "flex items-center gap-2 border rounded-md p-1",
          borderColorClass
        )}
      >
        <input
          type="text"
          name="search"
          id="search"
          value={inputValue}
          onChange={handleInputChange}
          className={clsx(
            "flex-grow bg-transparent outline-none px-2 text-sm",
            borderColorClass
          )}
          placeholder="Search github user..."
        />
        <div className="flex items-center justify-center w-8 h-8 text-primary">
          <Search className="w-4 h-4" />
        </div>
      </form>
    </div>
  );
};
