import { useTheme } from "@context/themeContext";
import clsx from "clsx";
import { GithubUser } from "../interfaces/GithubUser";

interface CardProps {
  userData: GithubUser;
}

export const Card = (props: CardProps) => {
  const { userData } = props;
  const { theme } = useTheme();

  const isDarkTheme = theme === "dark";

  const textPrimaryClass = isDarkTheme ? "text-white" : "text-gray-900";
  const textSecondaryClass = isDarkTheme ? "text-gray-400" : "text-gray-600";
  const cardBgClass = isDarkTheme ? "bg-gray-800" : "bg-white";
  const borderColorClass = isDarkTheme ? "border-gray-700" : "border-gray-300";
  const locationBadgeClass = isDarkTheme
    ? "bg-primary/40 text-primary-dark"
    : "bg-primary/10 text-primary-light";

  return (
    <section
      className={clsx(
        "w-full p-6 border rounded-lg shadow-sm transition-all duration-300 bg-transparent",

        borderColorClass
      )}
    >
      {/* Header Section */}
      <div className="flex items-center gap-4">
        <img
          src={userData.avatar_url}
          alt={`${userData.name}'s avatar`}
          className="rounded-full w-20 h-20 object-cover border border-gray-200"
        />
        <div className="flex flex-col">
          <h2
            className={clsx(
              "text-lg font-semibold leading-tight",
              textPrimaryClass
            )}
          >
            {userData.name}
          </h2>
          <p className={clsx("text-sm font-medium", textSecondaryClass)}>
            @{userData.login}
          </p>
        </div>
      </div>

      {/* Bio Section */}
      {userData.bio && (
        <p className={clsx("mt-4 text-sm leading-relaxed", textSecondaryClass)}>
          {userData.bio}
        </p>
      )}

      {/* Stats Section */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-center">
          <h3 className={clsx("text-sm font-medium", textSecondaryClass)}>
            Repositories
          </h3>
          <p className={clsx("text-lg font-bold text-primary")}>
            {userData.public_repos}
          </p>
        </div>
        <div className="text-center">
          <h3 className={clsx("text-sm font-medium", textSecondaryClass)}>
            Followers
          </h3>
          <p className={clsx("text-lg font-bold text-primary")}>
            {userData.followers}
          </p>
        </div>
        <div className="text-center">
          <h3 className={clsx("text-sm font-medium", textSecondaryClass)}>
            Following
          </h3>
          <p className={clsx("text-lg font-bold text-primary")}>
            {userData.following}
          </p>
        </div>
      </div>

      {/* Location Badge */}
      <div
        className={clsx(
          "mt-6 inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full",
          locationBadgeClass
        )}
      >
        <span className="text-lg">📍</span>
        <p>{userData.location || "Not available"}</p>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button
          className={clsx(
            "w-full py-2 px-4 text-sm font-semibold rounded-md bg-primary hover:bg-primary/90 transition-colors duration-200 text-white"
          )}
          onClick={() => {
            window.open(userData.html_url, "_blank");
          }}
        >
          View Profile
        </button>
      </div>
    </section>
  );
};
