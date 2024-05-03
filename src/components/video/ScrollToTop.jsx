import { ArrowDownToLine } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showButton = scrollY > window.innerHeight * 0.2;
      setIsVisible(showButton);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.2 }}
      className={`fixed bottom-0 right-[26%] z-10 rounded-tl-xl rounded-tr-xl p-3 bg-page-bg hover:bg-[#333333] focus:outline-none transition-all duration-300 `}
      onClick={scrollToTop}
    >
      <ArrowDownToLine className="text-base rotate-180 text-[#8b8b8b]" />
    </motion.button>
  );
};

export default ScrollToTopButton;