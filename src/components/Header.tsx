import React from "react";
import Logo from "../assets/icon/Logo";
import Navbar from "./NavBar";

const Header = () => {
  return (
    <header className="relative z-10 flex h-32 w-full items-center pl-14 max-lg:h-24 max-lg:pl-10 max-md:h-auto max-md:items-start max-md:px-6 max-md:py-7">
      <Logo className="h-12 w-12 max-md:h-10 max-md:w-10" />

      <div className="ml-14 h-px flex-1 translate-x-8 bg-white/25 max-lg:hidden" />

      <Navbar />
    </header>
  );
};

export default Header;
