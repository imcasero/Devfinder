import { useTheme } from "@context/themeContext";
import clsx from "clsx";

export const SkeletonCard = () => {
  const { theme } = useTheme();

  const skeletonBgClass =
    theme === "dark" ? "bg-neutral-700/50" : "bg-gray-200";

  return (
    <section
      className={clsx(
        "w-full p-6 rounded-xl shadow-lg border flex flex-col gap-6 animate-slide-up",
        theme === "dark"
          ? "bg-neutral-800/95 border-neutral-700"
          : "bg-white border-gray-200"
      )}
    >
      {/* Avatar and Name Section */}
      <div className="w-full flex flex-row gap-4">
        <div
          className={clsx(
            "rounded-full w-20 h-20 animate-pulse",
            skeletonBgClass
          )}
        ></div>
        <div className="flex flex-col justify-center gap-2 w-full">
          <div
            className={clsx(
              "h-5 w-32 rounded-md animate-pulse",
              skeletonBgClass
            )}
          ></div>
          <div
            className={clsx(
              "h-4 w-24 rounded-md animate-pulse",
              skeletonBgClass
            )}
          ></div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="space-y-2">
        <div
          className={clsx(
            "h-3 w-full rounded-md animate-pulse",
            skeletonBgClass
          )}
        ></div>
        <div
          className={clsx(
            "h-3 w-3/4 rounded-md animate-pulse",
            skeletonBgClass
          )}
        ></div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4">
        {Array(3)
          .fill(null)
          .map((_, idx) => (
            <div
              key={idx}
              className={clsx(
                "p-4 rounded-lg",
                theme === "dark"
                  ? "bg-neutral-700/50 border border-neutral-600/50"
                  : "bg-gray-50 border border-gray-200"
              )}
            >
              <div
                className={clsx(
                  "h-3 w-16 rounded-md animate-pulse mb-2",
                  skeletonBgClass
                )}
              ></div>
              <div
                className={clsx(
                  "h-6 w-12 rounded-md animate-pulse",
                  skeletonBgClass
                )}
              ></div>
            </div>
          ))}
      </div>

      {/* Location Section */}
      <div
        className={clsx(
          "w-fit inline-flex items-center gap-2 px-4 py-2 rounded-lg",
          theme === "dark"
            ? "bg-neutral-700/30 border border-neutral-600/30"
            : "bg-gray-50 border border-gray-200"
        )}
      >
        <div
          className={clsx("h-4 w-4 rounded-md animate-pulse", skeletonBgClass)}
        ></div>
        <div
          className={clsx("h-4 w-24 rounded-md animate-pulse", skeletonBgClass)}
        ></div>
      </div>

      {/* Button Section */}
      <div className="flex gap-3">
        <div
          className={clsx(
            "py-3 px-4 rounded-lg flex-1 h-11 animate-pulse",
            skeletonBgClass
          )}
        ></div>
        <div
          className={clsx(
            "py-3 px-4 rounded-lg flex-1 h-11 animate-pulse",
            skeletonBgClass
          )}
        ></div>
      </div>
    </section>
  );
};
