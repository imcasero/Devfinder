import { useTheme } from "@context/themeContext";
import clsx from "clsx";
import ErrorIcon from "@assets/Error.svg";
import UserNotFoundIcon from "@assets/UserNotFound.svg";

interface ErrorCardProps {
  message: string;
  statusCode: string | null;
}

export const ErrorCard = ({ message, statusCode }: ErrorCardProps) => {
  const { theme } = useTheme();

  const backgroundClass =
    theme === "dark" ? "bg-background-dark" : "bg-background-light";
  const textPrimaryClass =
    theme === "dark" ? "text-textPrimary-dark" : "text-textPrimary-light";
  const textSecondaryClass =
    theme === "dark" ? "text-textSecondary-dark" : "text-textSecondary-light";
  const borderColorClass =
    theme === "dark" ? "border-borderColor-dark" : "border-borderColor-light";

  const errorTitle =
    statusCode === "404" ? "User Not Found" : "Unexpected Error";
  const errorMessage =
    statusCode === "404"
      ? "Sorry, we couldn't find a GitHub user matching the search criteria provided. Please try again with different parameters."
      : message || "An unexpected error occurred. Please try again later.";

  return (
    <div
      className={clsx(
        "w-full p-6 border rounded-md flex flex-col gap-4 justify-center items-center",
        backgroundClass,
        textPrimaryClass,
        borderColorClass
      )}
    >
      <div className="flex flex-col items-center">
        {statusCode === "404" ? (
          <img
            src={UserNotFoundIcon}
            alt="User Not Found"
            className="w-16 h-16 mb-4"
          />
        ) : (
          <img src={ErrorIcon} alt="Error Icon" className="w-16 h-16 mb-4" />
        )}
        <h2 className="text-xl font-semibold mt-2">{errorTitle}</h2>
        <p className={clsx("text-base text-center mt-2", textSecondaryClass)}>
          {errorMessage}
        </p>
      </div>
    </div>
  );
};
