import { Seeker } from "@components/Seeker";
import { SimpleCard } from "@components/SimpleCard";
import { useTheme } from "@context/themeContext";
import { getStoredUsers } from "@lib/storageUser.service";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import type { StoredUser } from "../interfaces/StoredUser";

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
            Recent Searches:
          </h2>
          <ul className="flex flex-wrap gap-4 justify-center">
            {recentUsers.map((user: StoredUser, index: number) => (
              <SimpleCard
                key={index}
                avatar_url={user.avatar_url}
                login={user.login}
                name={user.name}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
