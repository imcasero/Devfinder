import { Card } from "@components/Card";
import { Header } from "@components/Header";
import { Seeker } from "@components/Seeker";
import { useTheme } from "@context/themeContext";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { getGithubUserByName } from "@lib/getUser.service";
import { ErrorCard } from "@components/ErrorCard";
import { SkeletonCard } from "@components/SkeletonCard";

function App() {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [statusCode, setStatusCode] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        setLoading(true);
        try {
          const user = await getGithubUserByName(searchTerm);
          setUserData(user);
          setError(null);
          setStatusCode(null);
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
  }, [searchTerm]);

  return (
    <main
      className={clsx(
        "min-h-screen",
        theme === "dark"
          ? "bg-background-dark text-textPrimary-dark"
          : "bg-background-light text-textPrimary-light"
      )}
    >
      <div className="flex flex-col gap-5 w-full px-4 py-5 m-auto md:w-[767px]">
        <Header />
        <Seeker setSearchTerm={setSearchTerm} />

        {error && <ErrorCard message={error} statusCode={statusCode} />}

        {loading && <SkeletonCard />}

        {!loading && userData && <Card userData={userData} />}
      </div>
    </main>
  );
}

export default App;
