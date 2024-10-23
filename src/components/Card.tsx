import { useTheme } from "@context/themeContext";
import clsx from "clsx";

interface CardProps {
  userData: any;
}

export const Card = (props: CardProps) => {
  const userData = props.userData;
  const { theme } = useTheme();

  const textSecondaryClass =
    theme === "dark" ? "text-textSecondary-dark" : "text-textSecondary-light";
  const buttonTextClass =
    theme === "dark" ? "text-buttonText-dark" : "text-buttonText-light";
  const borderColorClass =
    theme === "dark" ? "border-borderColor-dark" : "border-borderColor-light";
  return (
    <section
      className={clsx(
        "w-full p-5 border rounded-md flex flex-col gap-6 transition-all duration-300",
        borderColorClass
      )}
    >
      <div className="w-full flex flex-row gap-2">
        <img
          src={userData.avatar_url}
          className="rounded-full bg-gray-200 w-20 h-20"
        />

        <div className="flex flex-col justify-center">
          <h2 className="text-base font-medium">{userData.name}</h2>
          <p className={clsx("text-base", textSecondaryClass)}>
            @{userData.login}
          </p>
        </div>
      </div>
      <p className="text-sm font-normal">{userData.bio}</p>
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col gap-2">
          <h3>Repositories</h3>
          <p className="text-primary font-bold">{userData.public_repos}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Followers</h3>
          <p className="text-primary font-bold">{userData.followers}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Following</h3>
          <p className="text-primary font-bold">{userData.following}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3>Location:</h3>
        <p className="font-light">{userData.location}</p>
      </div>
      <div>
        <button
          className={clsx("py-2 px-4 bg-primary rounded-md", buttonTextClass)}
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
