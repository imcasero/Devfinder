import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { useTheme } from "@context/themeContext";
import clsx from "clsx";
import { Home } from "@pages/Home";
import { Response } from "@pages/Response";

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
      <div
        className={clsx(
          "min-h-screen flex flex-col",
          theme === "dark"
            ? "bg-background-dark text-textPrimary-dark"
            : "bg-background-light text-textPrimary-light"
        )}
      >
        <main className="flex-grow">
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
