import { Seeker } from "@components/Seeker";
import { useNavigate } from "react-router-dom";
import { StoredUser } from "../interfaces/StoredUser";
import { getStoredUsers } from "@lib/storageUser.service";
import { SimpleCard } from "@components/SimpleCard";

export const Home = () => {
  const navigate = useNavigate();
  const recentUsers = getStoredUsers(); // Get the list of recent users from localStorage

  const handleSearch = (username: string) => {
    if (username) {
      navigate(`/${username}`);
    }
  };

  return (
    <div>
      <Seeker setSearchTerm={handleSearch} />

      {recentUsers.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Recent Searches</h2>
          <ul className="flex flex-row flex-wrap gap-2 mt-4">
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
