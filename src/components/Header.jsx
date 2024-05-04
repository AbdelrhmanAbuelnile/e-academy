import { CircleUserRound, Globe, SearchIcon } from "lucide-react";
import logo from "../assets/logo.png";
import { FaRegBell } from "react-icons/fa";
import { useLang } from "../hooks/LangContext";
function Header() {
	const { lang, setLang } = useLang();
	return (
		<header
			className={`fixed z-10 top-0 left-0 w-full lg:px-20 lg:py-6 flex justify-between items-center bg-[#121212] ${
				lang ? "flex-row-reverse" : "flex-row"
			}`}
		>
			<div className="">
				<img src={logo} alt="Al mentor Academy logo" />
			</div>
			<div
				className={`flex justify-center items-center gap-6 ${
					lang ? "flex-row-reverse" : "flex-row"
				}`}
			>
				<div className="bg-white p-3 rounded-full flex justify-start items-center gap-2.5">
					<SearchIcon className="cursor-pointer" />
					<input
						type="text"
						aria-description="search field"
						className=" focus:outline-none border-none w-full h-full placeholder:font-bold"
						placeholder={lang ? "بحث" :"Search"}
					/>
				</div>

				<div className="bg-white rounded-full p-3">
					<FaRegBell className="cursor-pointer text-xl" />
				</div>
				<div className="bg-white rounded-full p-3">
					<CircleUserRound className="cursor-pointer" />
				</div>
				<div
					onClick={() => setLang(!lang)}
					className={`bg-white w-20 rounded-full p-3 flex items-center gap-3 cursor-pointer ${
						lang ? "flex-row" : "flex-row-reverse"
					}`}
				>
					<Globe />
					<span className="font-bold">{lang ? "En" : "ع"}</span>
				</div>
			</div>
		</header>
	);
}

export default Header;
