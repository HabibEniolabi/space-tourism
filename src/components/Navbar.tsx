import { NavLink } from "react-router-dom";

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
    <nav
      className={[
        "flex h-[90px] min-w-[680px] items-center justify-center gap-11 border-l border-white/5 bg-white/10 px-14 backdrop-blur-2xl transition-transform duration-300",
        "max-lg:ml-auto max-lg:h-24 max-lg:min-w-0 max-lg:gap-8 max-lg:px-9",
        "max-md:fixed max-md:right-0 max-md:top-0 max-md:z-40 max-md:h-screen max-md:w-[70%] max-md:flex-col max-md:items-start max-md:justify-start max-md:gap-8 max-md:bg-[#0b0f1d]/85 max-md:px-8 max-md:py-28 max-md:backdrop-blur-2xl",
        isOpen ? "max-md:translate-x-0" : "max-md:translate-x-full",
      ].join(" ")}
    >
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={onClose}
          className={({ isActive }) =>
            [
              "relative flex h-full items-center gap-3 font-barlow-condensed text-[13px] uppercase tracking-[2.6px] text-white",
              "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-transparent hover:after:bg-white/50",
              "max-md:h-auto max-md:w-full max-md:text-base max-md:after:hidden",
              isActive ? "after:bg-white max-md:border-r-4 max-md:border-white" : "",
            ].join(" ")
          }
        >
          <strong className="font-bold">{link.number}</strong>
          <span className="font-light">{link.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;