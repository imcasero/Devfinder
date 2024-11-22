import { useTheme } from "@context/themeContext";
import clsx from "clsx";

export const SkeletonCard = () => {
  const { theme } = useTheme();

  const skeletonBgClass =
    theme === "dark" ? "bg-gray-700/50" : "bg-gray-300/50";

  return (
    <section
      className={clsx(
        "w-full p-5 border rounded-md flex flex-col gap-6 transition-all duration-300",
        skeletonBgClass
      )}
    >
      {/* Avatar and Name Section */}
      <div className="w-full flex flex-row gap-4">
        <div
          className={clsx(
            "rounded-full bg-gray-200 w-20 h-20 animate-pulse",
            skeletonBgClass
          )}
        ></div>
        <div className="flex flex-col justify-center gap-2 w-full">
          <div
            className={clsx(
              "h-4 w-32 rounded-md animate-pulse",
              skeletonBgClass
            )}
          ></div>
          <div
            className={clsx(
              "h-3 w-24 rounded-md animate-pulse",
              skeletonBgClass
            )}
          ></div>
        </div>
      </div>

      {/* Bio Section */}
      <div
        className={clsx("h-4 w-full rounded-md animate-pulse", skeletonBgClass)}
      ></div>
      <div
        className={clsx("h-4 w-3/4 rounded-md animate-pulse", skeletonBgClass)}
      ></div>

      {/* Stats Section */}
      <div className="flex flex-row justify-between">
        {Array(3)
          .fill(null)
          .map((_, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div
                className={clsx(
                  "h-4 w-20 rounded-md animate-pulse",
                  skeletonBgClass
                )}
              ></div>
              <div
                className={clsx(
                  "h-4 w-12 rounded-md animate-pulse",
                  skeletonBgClass
                )}
              ></div>
            </div>
          ))}
      </div>

      {/* Location Section */}
      <div
        className={clsx(
          "w-fit inline-flex items-center gap-2 px-4 py-2 rounded-full animate-pulse",
          skeletonBgClass
        )}
      >
        <div className={clsx("h-4 w-4 rounded-md", skeletonBgClass)}></div>
        <div className={clsx("h-4 w-20 rounded-md", skeletonBgClass)}></div>
      </div>

      {/* Button Section */}
      <div>
        <div
          className={clsx(
            "py-2 px-4 rounded-md w-32 h-10 animate-pulse",
            skeletonBgClass
          )}
        ></div>
      </div>
    </section>
  );
};
