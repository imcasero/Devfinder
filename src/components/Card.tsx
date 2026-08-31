import { useTheme } from "@context/themeContext";
import { toast } from "@pheralb/toast";
import clsx from "clsx";
import { Copy, SquareArrowOutUpRight } from "lucide-react";
import type { GithubUser } from "../interfaces/GithubUser";

interface CardProps {
  userData: GithubUser;
}

const getThemeClasses = (theme: string) => ({
  textPrimary: theme === "dark" ? "text-white" : "text-gray-900",
  textSecondary: theme === "dark" ? "text-gray-300" : "text-gray-600",
  borderColor: theme === "dark" ? "border-gray-700" : "border-gray-300",
  locationBadge:
    theme === "dark"
      ? "bg-primary/40 text-primary-dark"
      : "bg-primary/10 text-primary-light",
});

export const Card = ({ userData }: CardProps) => {
  const { theme } = useTheme();
  const { textPrimary, textSecondary } = getThemeClasses(theme);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => toast.success({ text: "URL copied to clipboard!" }))
      .catch(() => toast.error({ text: "Something went wrong" }));
  };

  return (
    <section
      className={clsx(
        "w-full p-6 rounded-xl shadow-lg animate-slide-up transition-all duration-300 hover:shadow-xl",
        theme === "dark"
          ? "bg-neutral-800/95 border border-neutral-700"
          : "bg-white border border-gray-200"
      )}
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={userData.avatar_url}
            alt={`${userData.name}'s avatar`}
            className="rounded-full w-20 h-20 object-cover ring-2 ring-primary/20 transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-col">
          <h2 className={clsx("text-xl font-bold leading-tight", textPrimary)}>
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

      <div className="mt-6 grid grid-cols-3 gap-4">
        {["public_repos", "followers", "following"].map((key, index) => (
          <div
            className={clsx(
              "text-center p-4 rounded-lg transition-all duration-200 hover:scale-105",
              theme === "dark"
                ? "bg-neutral-700/50 border border-neutral-600/50"
                : "bg-gray-50 border border-gray-200"
            )}
            key={key}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <h3
              className={clsx(
                "text-xs font-semibold uppercase tracking-wide mb-1",
                textSecondary
              )}
            >
              {key.replace("_", " ")}
            </h3>
            <p className={clsx("text-2xl font-bold text-primary")}>
              {userData[key as keyof GithubUser]}
            </p>
          </div>
        ))}
      </div>

      {userData.location && (
        <div
          className={clsx(
            "mt-5 inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg",
            theme === "dark"
              ? "bg-neutral-700/30 border border-neutral-600/30"
              : "bg-gray-50 border border-gray-200"
          )}
        >
          <span className="text-base">📍</span>
          <p className={textPrimary}>{userData.location}</p>
        </div>
      )}

      <div className="mt-6 flex gap-3">
        <a
          className="group flex-1 py-3 px-4 text-sm font-semibold rounded-lg bg-primary hover:bg-primary/90 text-white transition-all duration-200 hover:shadow-lg"
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center items-center gap-2">
            <p>View Profile</p>
            <SquareArrowOutUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </div>
        </a>

        <button
          type="button"
          className={clsx(
            "group flex-1 py-3 px-4 text-sm font-semibold rounded-lg border transition-all duration-200 hover:shadow-md",
            theme === "dark"
              ? "bg-neutral-700/50 border-neutral-600 hover:bg-neutral-700 text-white"
              : "bg-white border-gray-300 hover:bg-gray-50 text-gray-900"
          )}
          onClick={copyToClipboard}
        >
          <div className="flex justify-center items-center gap-2">
            <Copy
              size={16}
              className="group-hover:scale-110 transition-transform"
            />
            <p>Share</p>
          </div>
        </button>
      </div>
    </section>
  );
};
