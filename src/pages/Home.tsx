import { Seeker } from "@components/Seeker";
import { useNavigate } from "react-router-dom";
import { StoredUser } from "../interfaces/StoredUser";
import { getStoredUsers } from "@lib/storageUser.service";
import { SimpleCard } from "@components/SimpleCard";
import { useTheme } from "@context/themeContext";
import clsx from "clsx";

export const Home = () => {
  const navigate = useNavigate();
  const recentUsers = getStoredUsers();
  const { theme } = useTheme();

  const handleSearch = (username: string) => {
    if (username) {
      navigate(`/${username}`);
    }
  };

  return (
    <div>
      <Seeker setSearchTerm={handleSearch} />
      {recentUsers.length > 0 && (
        <div className="mt-8">
          <h2
            className={clsx(
              "text-lg font-bold mb-4",
              theme === "dark" ? "text-white" : "text-gray-900"
            )}
          >
            Recent Searches
          </h2>
          <ul className="flex flex-wrap gap-4">
            {recentUsers.map((user: StoredUser, index: number) => (
              <SimpleCard
                key={index}
                avatar_url={user.avatar_url}
                login={user.login}
                name={user.name}
                html_url={user.html_url}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
