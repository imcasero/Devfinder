import { useNavigate } from "react-router-dom";
import { StoredUser } from "../interfaces/StoredUser";
import { useTheme } from "@context/themeContext";

export const SimpleCard = (user: StoredUser) => {
  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <li
      key={user.login}
      className={`flex items-center gap-4 border border-borderColor-${theme} shadow-sm rounded-md w-fit px-4 py-2 hover:cursor-pointer hover:bg-primary/10 transition-colors duration-200`}
      onClick={() => {
        navigate(user.html_url, { replace: true });
      }}
    >
      <img
        src={user.avatar_url}
        alt={user.name}
        className="rounded-full w-12 h-12 object-cover"
      />
      <div>
        <h3 className="font-semibold">{user.name}</h3>
        <p className="text-gray-600">@{user.login}</p>
      </div>
    </li>
  );
};
