import { NavLink } from "react-router-dom";
import Close from "../assets/icon/Close";

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
      {/* Mobile overlay */}
      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={onClose}
        className={[
          "fixed inset-0 z-30 bg-black/30 transition-opacity duration-300 md:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      <nav
        aria-label="Main navigation"
        className={[
          /**
           * Tablet + desktop
           */
          "relative z-40 ml-auto hidden h-24 items-center justify-center bg-white/10 px-10 backdrop-blur-2xl md:flex",
          "md:w-[min(65vw,640px)] md:gap-8",
          "lg:h-[96px] lg:w-[min(58vw,830px)] lg:gap-12 lg:px-14",
          /**
           * Mobile drawer
           */
          "max-md:fixed max-md:right-0 max-md:top-0 max-md:z-40 max-md:flex max-md:h-[100svh]",
          "max-md:w-[68%] max-md:min-w-[245px] max-md:max-w-[320px]",
          "max-md:flex-col max-md:items-start max-md:justify-start",
          "max-md:bg-[#11131f]/98 max-md:px-8 max-md:pt-[118px] max-md:shadow-[-40px_0_80px_rgba(0,0,0,0.35)] max-md:backdrop-blur-2xl",
          "max-md:transition-transform max-md:duration-300 max-md:ease-out",
          isOpen ? "max-md:translate-x-0" : "max-md:translate-x-full",
        ].join(" ")}
      >
        {/* Mobile close button */}
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="absolute right-6 top-8 hidden text-[#d0d6f9] transition hover:text-white max-md:block cursor-pointer"
        >
          <Close />
        </button>

        <div className="flex h-full w-full items-center justify-center gap-8 md:gap-8 lg:gap-12 max-md:h-auto max-md:flex-col max-md:items-start max-md:justify-start max-md:gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                [
                  "relative flex h-full items-center gap-3 font-barlow-condensed uppercase text-white",
                  "text-[13px] tracking-[2.6px] md:text-[14px] lg:text-[15px]",

                  /**
                   * Desktop/tablet underline
                   */
                  "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-transparent after:transition",
                  "hover:after:bg-white/50",

                  /**
                   * Mobile item
                   */
                  "max-md:h-auto max-md:w-full max-md:py-1 max-md:pr-6 max-md:text-base max-md:tracking-[2.7px]",
                  "max-md:after:hidden",

                  /**
                   * Mobile active right border
                   */
                  "max-md:before:absolute max-md:before:right-[-32px] max-md:before:top-1/2 max-md:before:h-[31px] max-md:before:w-1 max-md:before:-translate-y-1/2 max-md:before:bg-transparent",

                  isActive ? "after:bg-white max-md:before:bg-white" : "",
                ].join(" ")
              }
            >
              <strong className="font-bold">{link.number}</strong>
              <span className="font-light">{link.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
