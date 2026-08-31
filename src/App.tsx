import { Footer } from "@components/Footer";

import { Header } from "@components/Header";
import { useTheme } from "@context/themeContext";
import { Home } from "@pages/Home";
import { Response } from "@pages/Response";
import { Toaster } from "@pheralb/toast";
import clsx from "clsx";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col gap-6 flex-grow w-full px-4 py-5 md:w-[767px] m-auto">
      <Header />
      <Outlet />
    </div>
  );
}

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <Toaster position="top-center" theme={theme} />
      <div
        className={clsx(
          "min-h-screen flex flex-col transition-colors duration-200 relative overflow-hidden",
          theme === "dark"
            ? "bg-background-dark text-textPrimary-dark"
            : "bg-background-light text-textPrimary-light"
        )}
      >
        {/* Subtle background gradient */}
        <div className="fixed inset-0 -z-10">
          <div
            className={clsx(
              "absolute inset-0",
              theme === "dark"
                ? "bg-gradient-to-br from-black via-neutral-950 to-black"
                : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
            )}
          ></div>
        </div>

        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path=":username" element={<Response />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
