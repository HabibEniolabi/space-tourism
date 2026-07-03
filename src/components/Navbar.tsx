import React from "react";
import { NavLink } from "react-router-dom";

type NavLinkItem = {
  number: string;
  label: string;
  path: string;
};

const navLinks: NavLinkItem[] = [
  { number: "00", label: "Home", path: "/" },
  { number: "01", label: "Destination", path: "/destination" },
  { number: "02", label: "Crew", path: "/crew" },
  { number: "03", label: "Technology", path: "/technology" },
];
const Navbar = () => {
  return (
    <nav className="flex h-[90px] min-w-[680px] items-center justify-center gap-11 border-l border-white/5 bg-white/10 px-14 backdrop-blur-2xl max-lg:ml-auto max-lg:h-24 max-lg:min-w-0 max-lg:gap-8 max-lg:px-9 max-md:fixed max-md:right-0 max-md:top-0 max-md:h-screen max-md:w-[70%] max-md:flex-col max-md:items-start max-md:justify-start max-md:gap-8 max-md:px-8 max-md:py-28">
      {navLinks.map((link) => {
        return (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              [
                "relative flex h-full items-center gap-3 font-barlow-condensed text-[13px] uppercase tracking-[2.6px] text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-transparent hover:after:bg-white/50 max-md:h-auto max-md:text-base max-md:after:hidden",
                isActive ? "after:bg-white" : "",
              ].join(" ")
            }
          >
            <strong className="font-bold">{link.number}</strong>
            <span className="font-light">{link.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
