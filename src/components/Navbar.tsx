import { NavLink } from "react-router-dom";
// Create these icons yourself, or replace with your existing icon components
import { CloseIcon } from "./icons/NavIcons";

type NavLinkItem = {
  number: string;
  label: string;
  path: string;
};

type NavbarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navLinks: NavLinkItem[] = [
  { number: "00", label: "Home", path: "/" },
  { number: "01", label: "Destination", path: "/destination" },
  { number: "02", label: "Crew", path: "/crew" },
  { number: "03", label: "Technology", path: "/technology" },
];

const Navbar = ({ isOpen, onClose }: NavbarProps) => {
  return (
    <>
      {/* Mobile dark backdrop */}
      <button
        type="button"
        aria-label="Close navigation overlay"
        onClick={onClose}
        className={[
          "fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 md:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      <nav
        aria-label="Main navigation"
        className={[
          /**
           * Desktop / tablet nav
           */
          "relative z-40 ml-auto flex h-24 items-center justify-center gap-9 border-l border-white/5 bg-white/10 px-10 backdrop-blur-2xl transition-transform duration-300",
          "lg:h-[96px] lg:w-[min(58vw,830px)] lg:gap-12 lg:px-14",

          /**
           * Mobile drawer
           */
          "max-md:fixed max-md:right-0 max-md:top-0 max-md:h-[100svh] max-md:w-[68%] max-md:min-w-[250px] max-md:max-w-[320px]",
          "max-md:flex-col max-md:items-start max-md:justify-start max-md:gap-8 max-md:bg-[#0b0f1d]/90 max-md:px-8 max-md:pb-10 max-md:pt-28 max-md:backdrop-blur-2xl",

          isOpen
            ? "max-md:translate-x-0"
            : "max-md:translate-x-full",
        ].join(" ")}
      >
        {/* Mobile close icon */}
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="absolute right-6 top-8 hidden cursor-pointer text-[#d0d6f9] transition hover:text-white max-md:block"
        >
          <CloseIcon />
        </button>

        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            onClick={onClose}
            className={({ isActive }) =>
              [
                "group relative flex h-full items-center gap-3 font-barlow-condensed text-sm uppercase tracking-[2.7px] text-white transition",
                "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-transparent after:transition",
                "hover:after:bg-white/50",

                /**
                 * Mobile nav item
                 */
                "max-md:h-auto max-md:w-full max-md:py-1 max-md:pr-6 max-md:text-base max-md:tracking-[2.7px]",
                "max-md:after:hidden",

                isActive
                  ? "after:bg-white max-md:border-r-4 max-md:border-white"
                  : "",
              ].join(" ")
            }
          >
            <strong className="font-bold">{link.number}</strong>
            <span className="font-light">{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;