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

  const textSecondaryClass =
    theme === "dark" ? "text-textSecondary-dark" : "text-textSecondary-light";

  const errorTitle =
    statusCode === "404" ? "User Not Found" : "Unexpected Error";
  const errorMessage =
    statusCode === "404"
      ? "Sorry, we couldn't find a GitHub user matching the search criteria provided. Please try again with different parameters."
      : message || "An unexpected error occurred. Please try again later.";

  return (
    <div
      className={clsx(
        "w-full p-8 rounded-xl shadow-lg border flex flex-col gap-4 justify-center items-center animate-slide-up",
        theme === "dark"
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-gray-200"
      )}
    >
      <div className="flex flex-col items-center">
        {statusCode === "404" ? (
          <img
            src={UserNotFoundIcon}
            alt="User Not Found"
            className="w-20 h-20 mb-4"
          />
        ) : (
          <img
            src={ErrorIcon}
            alt="Error Icon"
            className="w-20 h-20 mb-4"
          />
        )}
        <h2 className={clsx("text-xl font-bold mt-2", theme === "dark" ? "text-white" : "text-gray-900")}>
          {errorTitle}
        </h2>
        <p className={clsx("text-sm text-center mt-3 max-w-md leading-relaxed", textSecondaryClass)}>
          {errorMessage}
        </p>
      </div>
    </div>
  );
};
