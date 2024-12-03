import { useTheme } from "@context/themeContext";
import clsx from "clsx";
import { GithubUser } from "../interfaces/GithubUser";
import { Copy, SquareArrowOutUpRight } from "lucide-react";
import { toast } from "@pheralb/toast";

interface CardProps {
  userData: GithubUser;
}

const getThemeClasses = (theme: string) => ({
  textPrimary: theme === "dark" ? "text-white" : "text-gray-900",
  textSecondary: theme === "dark" ? "text-gray-400" : "text-gray-600",
  borderColor: theme === "dark" ? "border-gray-700" : "border-gray-300",
  locationBadge:
    theme === "dark"
      ? "bg-primary/40 text-primary-dark"
      : "bg-primary/10 text-primary-light",
});

export const Card = ({ userData }: CardProps) => {
  const { theme } = useTheme();
  const { textPrimary, textSecondary, borderColor, locationBadge } =
    getThemeClasses(theme);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => toast.success({ text: "URL copied to clipboard!" }))
      .catch(() => toast.error({ text: "Something went wrong" }));
  };

  return (
    <section
      className={clsx(
        "w-full p-6 border rounded-lg shadow-sm bg-transparent",
        borderColor
      )}
    >
      <div className="flex items-center gap-4">
        <img
          src={userData.avatar_url}
          alt={`${userData.name}'s avatar`}
          className="rounded-full w-20 h-20 object-cover border border-gray-200"
        />
        <div className="flex flex-col">
          <h2
            className={clsx("text-lg font-semibold leading-tight", textPrimary)}
          >
            {userData.name}
          </h2>
          <p className={clsx("text-sm font-medium", textSecondary)}>
            @{userData.login}
          </p>
        </div>
      </div>

      {userData.bio && (
        <p className={clsx("mt-4 text-sm leading-relaxed", textSecondary)}>
          {userData.bio}
        </p>
      )}

      <div className="mt-6 flex justify-between items-center">
        {["public_repos", "followers", "following"].map((key) => (
          <div className="text-center" key={key}>
            <h3 className={clsx("text-sm font-medium", textSecondary)}>
              {key.replace("_", " ").toUpperCase()}
            </h3>
            <p className={clsx("text-lg font-bold text-primary")}>
              {userData[key as keyof GithubUser]}
            </p>{" "}
            {/* Aquí estamos asegurando el tipo */}
          </div>
        ))}
      </div>

      <div
        className={clsx(
          "mt-6 inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full",
          locationBadge
        )}
      >
        <span className="text-lg">📍</span>
        <p>{userData.location || "Not available"}</p>
      </div>

      <div className="mt-6 flex gap-6">
        <a
          className="w-full py-2 px-4 text-sm font-semibold rounded-md bg-primary hover:bg-primary/90 text-white flex justify-center items-center gap-2 transition-colors duration-200"
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>View Profile</p>
          <SquareArrowOutUpRight size={15} />
        </a>

        <button
          className="w-full py-2 px-4 text-sm font-semibold rounded-md border border-primary text-primary flex justify-center items-center gap-2 hover:bg-white/10 transition-colors duration-200"
          onClick={copyToClipboard}
        >
          <Copy size={15} />
          <p>Share</p>
        </button>
      </div>
    </section>
  );
};
