import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import { useLang } from "../hooks/LangContext";

function Layout() {
  const { lang } = useLang();
  return (
    <div className={`flex w-full h-screen overflow-hidden bg-page-bg ${lang ? "flex-row-reverse" : "flex-row"}`}>
      <Sidenav />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex justify-between gap-10 flex-1 overflow-y-auto">
          <div className="w-full h-full overflow-y-auto">
            <Outlet />
          </div>
        </div>
        <footer className="w-full"></footer>
      </div>
    </div>
  );
}

export default Layout;
