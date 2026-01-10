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
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="animate-slide-down">
      <form
        onSubmit={handleSubmit}
        className={clsx(
          "flex items-center gap-3 rounded-xl p-3 shadow-md transition-all duration-200",
          isFocused && "ring-2 ring-neutral-600/30 shadow-lg",
          theme === "dark"
            ? "bg-neutral-900 border border-neutral-800"
            : "bg-white border border-gray-200"
        )}
        id="searchForm"
      >
        <Search
          className={clsx(
            "w-5 h-5 transition-colors duration-200",
            isFocused ? "text-primary" : theme === "dark" ? "text-gray-300" : "text-gray-500"
          )}
        />
        <input
          type="text"
          name="search"
          id="search"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={clsx(
            "flex-grow bg-transparent outline-none px-2 text-sm font-medium placeholder:font-normal",
            theme === "dark" ? "text-white placeholder:text-gray-400" : "text-gray-900 placeholder:text-gray-400"
          )}
          placeholder="Search GitHub user..."
        />
        <button
          type="submit"
          className="px-5 py-2 rounded-lg font-semibold text-white text-sm bg-primary hover:bg-primary/90 transition-all duration-200 hover:shadow-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};
