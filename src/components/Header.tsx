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
    <header className="relative z-30 flex h-32 w-full items-center pl-14 max-lg:h-24 max-lg:pl-10 max-md:h-24 max-md:justify-between max-md:px-6">
      <Logo className="h-12 w-12 shrink-0 max-md:h-10 max-md:w-10" />

      <div className="ml-14 h-px flex-1 translate-x-8 bg-white/25 max-lg:hidden" />

      <Navbar isOpen={isMenuOpen} onClose={handleCloseMenu} />

      <button
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        onClick={handleToggleMenu}
        className="relative z-50 hidden h-8 w-8 flex-col items-center justify-center gap-1.5 max-md:flex"
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