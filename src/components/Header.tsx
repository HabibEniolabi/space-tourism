import { useState } from "react";
import Logo from "../assets/icon/Logo";
import Navbar from "./Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 flex h-24 w-full items-center px-6 md:px-10 lg:h-32 lg:pl-14 lg:pr-0">
      <Logo className="relative z-[70] h-10 w-10 shrink-0 md:h-12 md:w-12" />

      <div className="relative z-50 ml-14 hidden h-px flex-1 translate-x-8 bg-white/25 lg:block" />

      <Navbar isOpen={isMenuOpen} onClose={handleCloseMenu} />

      <button
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        onClick={handleToggleMenu}
        className="fixed right-6 top-8 z-[80] hidden h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden max-md:flex"
      >
        <span
          className={[
            "h-[3px] w-6 bg-[#d0d6f9] transition duration-300",
            isMenuOpen ? "translate-y-[9px] rotate-45" : "",
          ].join(" ")}
        />

        <span
          className={[
            "h-[3px] w-6 bg-[#d0d6f9] transition duration-300",
            isMenuOpen ? "opacity-0" : "",
          ].join(" ")}
        />

        <span
          className={[
            "h-[3px] w-6 bg-[#d0d6f9] transition duration-300",
            isMenuOpen ? "-translate-y-[9px] -rotate-45" : "",
          ].join(" ")}
        />
      </button>
    </header>
  );
};

export default Header;