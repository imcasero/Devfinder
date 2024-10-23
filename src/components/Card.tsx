import { useTheme } from "@context/themeContext";
import clsx from "clsx";

export const Card = () => {
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
        "w-full p-5 border rounded-md flex flex-col gap-6",
        borderColorClass
      )}
    >
      <div className="w-full flex flex-row gap-2">
        {/*This will be a img */}
        <div className="rounded-full bg-gray-200 w-20 h-20"></div>{" "}
        <div className="flex flex-col justify-center">
          <h2 className="text-base font-medium">Diego Casero</h2>
          <p className={clsx("text-base", textSecondaryClass)}>@imcasero</p>
        </div>
      </div>
      <p className="text-sm font-normal">
        Passionate developer with a love for creating innovative solutions.
        Always eager to learn and collaborate on exciting projects.
      </p>
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col gap-2">
          <h3>Repositories</h3>
          <p className="text-primary font-bold">14</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Followers</h3>
          <p className="text-primary font-bold">14.6k</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Following</h3>
          <p className="text-primary font-bold">800</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3>Location:</h3>
        <p className="font-light">Madrid, Spain</p>
      </div>
      <div>
        <button
          className={clsx("py-2 px-4 bg-primary rounded-md", buttonTextClass)}
        >
          View Profile
        </button>
      </div>
    </section>
  );
};