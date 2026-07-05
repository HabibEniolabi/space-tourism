import * as React from "react"
import { SVGProps } from "react"

interface HamburgerProps extends SVGProps<SVGSVGElement> {
 color?: string;
}
const Hamburger = ({color = "#D0D6F9", ...props}: HamburgerProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19.091 19.091"
    fill="none"
    {...props}
  >
    <path fill={color} d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
  </svg>
)
export default Hamburger
