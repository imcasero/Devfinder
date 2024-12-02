import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { textPrimary, textSecondary, borderColor, hoverBg } =
    getThemeClasses(theme);

  return (
    <li
      key={user.login}
      className={clsx(
        "flex items-center gap-4 border rounded-lg shadow-md px-5 py-3 w-fit cursor-pointer transition-all duration-200",
        borderColor,
        hoverBg
      )}
      onClick={() => {
        navigate(user.login);
      }}
    >
      <img
        src={user.avatar_url}
        alt={user.name}
        className="rounded-full w-14 h-14 object-cover border-2 border-primary"
      />
      <div>
        <h3 className={clsx("font-semibold text-md", textPrimary)}>
          {user.name}
        </h3>
        <p className={clsx("text-sm", textSecondary)}>@{user.login}</p>
      </div>
    </li>
  );
};
