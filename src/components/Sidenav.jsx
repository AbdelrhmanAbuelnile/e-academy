import { NavLink } from "react-router-dom";
import { RiHome6Fill } from "react-icons/ri";
import { LuLayoutTemplate } from "react-icons/lu";
import { FaCalendarAlt, FaGraduationCap } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useLang } from "../hooks/LangContext";

function Sidenav() {
  const { lang } = useLang();
  return (
    <div className={`hidden mt-24 bg-[#121212] w-[353px] py-5 text-2xl font-bold md:flex flex-col justify-between ${lang? "items-end" : "items-start"} pl-20 pr-16`}>
      <div className={`flex flex-col justify-start ${lang? "items-end" : "items-start"} gap-11 capitalize`}>
        <NavLink
          to="/"
          className={`text-white font-bold text-2xl flex items-center gap-2.5 ${lang? "flex-row-reverse" : ""}`}
        >
          <RiHome6Fill className="font-bold" />
          <span>{lang? "الرئيسية" : "Home"}</span>
        </NavLink>
        <NavLink
          to="/my-courses"
          className={`text-white font-bold text-2xl flex items-center gap-2.5 ${lang? "flex-row-reverse" : ""}`}
        >
          <FaGraduationCap className="font-bold" />
          <span>{lang? "كورساتي" :"My Courses"}</span>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={`text-white font-bold text-2xl flex items-center gap-2.5 ${lang? "flex-row-reverse" : ""}`}
        >
          <LuLayoutTemplate className="font-bold -rotate-90" />
          <span>{lang? "لوحة التحكم" : "Dashboard"}</span>
        </NavLink>
        <NavLink
          to="/calendar"
          className={`text-white font-bold text-2xl flex items-center gap-2.5 ${lang? "flex-row-reverse" : ""}`}
        >
          <FaCalendarAlt className="font-bold" />
          <span>{lang? "التقويم" : "Calendar"}</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={`text-white font-bold text-2xl flex items-center gap-2.5 ${lang? "flex-row-reverse" : ""}`}
        >
          <IoSettings className="font-bold" />
          <span>{lang ? "الاعدادات" : "Settings"}</span>
        </NavLink>
      </div>
      <div className={`${lang? "self-end" : "self-start"}`}>
        <button
          className="flex items-center gap-2.5 hover:text-orange-500 text-white capitalize"
        >
          <CiLogout className="font-bold" />
          <span>{lang? "تسجيل الخروج" : "Log Out"}</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
