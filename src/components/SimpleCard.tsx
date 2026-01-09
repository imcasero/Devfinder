import clsx from "clsx";
import { StoredUser } from "../interfaces/StoredUser";
import { useTheme } from "@context/themeContext";

const getThemeClasses = (theme: string) => ({
  textPrimary: theme === "dark" ? "text-white" : "text-gray-900",
  textSecondary: theme === "dark" ? "text-gray-400" : "text-gray-600",
  borderColor: theme === "dark" ? "border-gray-700" : "border-gray-300",
  hoverBg: theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100",
});

export const SimpleCard = (user: StoredUser) => {
  const { theme } = useTheme();
  const { textPrimary, textSecondary } =
    getThemeClasses(theme);

  return (
    <a
      key={user.login}
      href={`/${user.login}`}
      className={clsx(
        "group flex items-center gap-4 rounded-lg shadow-md px-5 py-3 w-fit transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5",
        theme === "dark"
          ? "bg-slate-800 border border-slate-700 hover:border-primary/30"
          : "bg-white border border-gray-200 hover:border-primary/30"
      )}
    >
      <img
        src={user.avatar_url}
        alt={user.name}
        className="rounded-full w-12 h-12 object-cover ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-200"
      />
      <div>
        <h3 className={clsx("font-semibold text-sm group-hover:text-primary transition-colors", textPrimary)}>
          {user.name}
        </h3>
        <p className={clsx("text-xs", textSecondary)}>@{user.login}</p>
      </div>
    </a>
  );
};
