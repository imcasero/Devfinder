import { Card } from "@components/Card";
import { ErrorCard } from "@components/ErrorCard";
import { Seeker } from "@components/Seeker";
import { SkeletonCard } from "@components/SkeletonCard";
import { getGithubUserByName } from "@lib/getUser.service";
import { addUserToStorage, createStoredUser } from "@lib/storageUser.service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { GithubUser } from "../interfaces/GithubUser";

export const Response = () => {
  const { username } = useParams<{ username: string }>();
  const [userData, setUserData] = useState<GithubUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [statusCode, setStatusCode] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSearch = (searchTerm: string) => {
    if (searchTerm) {
      navigate(`/${searchTerm}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (username) {
        setLoading(true);
        try {
          const user = await getGithubUserByName(username);
          setUserData(user);
          setError(null);
          setStatusCode(null);
          const storedUser = createStoredUser(
            user.avatar_url,
            user.login,
            user.name ? user.name : ""
          );
          addUserToStorage(storedUser);
        } catch (err) {
          const message = err instanceof Error ? err.message : "Unknown error";
          const code = message.match(/Error (\d+):/)?.[1] ?? null;
          setStatusCode(code);
          setError(message);
          setUserData(null);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="flex flex-col gap-6">
      <Seeker setSearchTerm={handleSearch} />
      {error && <ErrorCard message={error} statusCode={statusCode} />}
      {loading && <SkeletonCard />}
      {!loading && userData && <Card userData={userData} />}
    </div>
  );
};
