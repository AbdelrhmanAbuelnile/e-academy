/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { RiHome6Fill } from "react-icons/ri";
import { LuLayoutTemplate } from "react-icons/lu";
import { FaCalendarAlt, FaGraduationCap } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { CircleX } from "lucide-react";

function MobileNav({ lang, toggleNav }) {
	return (
		<div className="fixed z-10 top-0 left-0 w-full h-full bg-[#e35b48] flex items-center justify-center">
			<div
				className="flex flex-col justify-center items-start gap-6"
				onClick={toggleNav}
			>
				<Link
					to={"/"}
					className={`text-white font-bold text-2xl underline flex items-center gap-2.5 ${
						lang ? "" : "flex-row-reverse"
					}`}
				>
					<span>{lang ? "الرئيسية" : "Home"}</span>
					<RiHome6Fill className="font-bold" />
				</Link>
				<Link
					to={"/my-courses"}
					className={`text-white font-bold text-2xl underline flex items-center gap-2.5 ${
						lang ? "" : "flex-row-reverse"
					}`}
				>
					{lang ? "كورساتي" : "My Courses"}
					<FaGraduationCap className="font-bold" />
				</Link>
				<Link
					to={"/dashboard"}
					className={`text-white font-bold text-2xl underline flex items-center gap-2.5 ${
						lang ? "" : "flex-row-reverse"
					}`}
				>
					{lang ? "لوحة التحكم" : "Dashboard"}
					<LuLayoutTemplate className="font-bold -rotate-90" />
				</Link>
				<Link
					to={"/calendar"}
					className={`text-white font-bold text-2xl underline flex items-center gap-2.5 ${
						lang ? "" : "flex-row-reverse"
					}`}
				>
					{lang ? "التقويم" : "Calendar"}
					<FaCalendarAlt className="font-bold" />
				</Link>
				<Link
					to={"/settings"}
					className={`text-white font-bold text-2xl underline flex items-center gap-2.5 ${
						lang ? "" : "flex-row-reverse"
					}`}
				>
					{lang ? "الاعدادات" : "Settings"}
					<IoSettings className="font-bold" />
				</Link>
				<button className="text-[#5144a7] font-bold text-2xl flex items-center gap-2.5">
					{lang ? "تسجيل الخروج" : "Log Out"}
					<CiLogout className="font-bold" />
				</button>
				<button
					onClick={() => toggleNav()}
					className={`text-white font-bold absolute top-0 ${
						lang ? "left-0" : "right-0"
					} m-4`}
				>
					<CircleX color="#000" size={40} />
				</button>
			</div>
		</div>
	);
}

export default MobileNav;
