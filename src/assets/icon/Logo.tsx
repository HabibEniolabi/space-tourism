import type { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const Logo = ({ color = "#fff", ...props }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Zm0 0s0-24 24-24C24 24 24 0 24 0s0 24-24 24c23.578.171 24 24 24 24Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Logo;