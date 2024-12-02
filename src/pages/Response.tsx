import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGithubUserByName } from "@lib/getUser.service";
import { Seeker } from "@components/Seeker";
import { Card } from "@components/Card";
import { ErrorCard } from "@components/ErrorCard";
import { SkeletonCard } from "@components/SkeletonCard";
import { addUserToStorage, createStoredUser } from "@lib/storageUser.service";

export const Response = () => {
  const { username } = useParams<{ username: string }>();
  const [userData, setUserData] = useState<any>(null);
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
          const currentUrl = window.location.origin;
          const storedUser = createStoredUser(
            user.avatar_url,
            user.login,
            user.name ? user.name : "",
            currentUrl
          );
          addUserToStorage(storedUser);
        } catch (err: any) {
          const code = err.message.match(/Error (\d+):/)?.[1];
          setStatusCode(code);
          setError(err.message);
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
