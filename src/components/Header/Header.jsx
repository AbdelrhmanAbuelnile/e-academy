import { Globe, Menu, SearchIcon } from "lucide-react";
import logo from "../../assets/logo.png";
import { FaRegBell } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useLang } from "../../hooks/LangContext";
import { useState } from "react";
import MobileNav from "./MobileNav";

function Header() {
	const { lang, setLang } = useLang();
	const [showNav, setShowNav] = useState(false);
	function toggleNav() {
		setShowNav(!showNav);
	}
	return (
		<header
			className={`fixed z-10 top-0 left-0 w-full py-3 px-4 md:px-10 lg:px-20 lg:py-6 flex gap-1 md:gap-0 justify-between items-center bg-[#121212] ${
				lang ? "flex-row-reverse" : "flex-row"
			}`}
		>
			<div className="">
				<img src={logo} alt="Al mentor Academy logo" />
			</div>
			<div
				className={`flex justify-center items-center gap-1 md:gap-6 ${
					lang ? "flex-row-reverse" : "flex-row"
				}`}
			>
				<div className="bg-white p-1.5 md:p-3 rounded-full flex justify-start items-center gap-2.5">
					<SearchIcon className="cursor-pointer" />
					<input
						type="text"
						aria-description="search field"
						className=" focus:outline-none border-none w-[100px] md:w-full h-full placeholder:font-bold"
						placeholder={lang ? "بحث" : "Search"}
					/>
				</div>

				<div className="bg-white rounded-full p-1.5 md:p-3">
					<FaRegBell className="cursor-pointer text-xl" />
				</div>
				<div className="bg-white rounded-full p-1.5 md:p-3">
					<HiOutlineUserCircle className="cursor-pointer text-xl" />
				</div>
				<div
					onClick={() => setLang(!lang)}
					className={`bg-white md:w-20 rounded-full p-1.5 md:p-3 flex items-center gap-1 md:gap-3 cursor-pointer ${
						lang ? "flex-row" : "flex-row-reverse"
					}`}
				>
					<Globe />
					<span className="font-bold">{lang ? "En" : "ع"}</span>
				</div>
			</div>
			<div className="md:hidden" onClick={toggleNav}>
				<Menu color="white" size={35} />
			</div>
			{showNav && (
				<MobileNav lang={lang} toggleNav={toggleNav} />
			)}
		</header>
	);
}

export default Header;
