import * as React from "react"
import { SVGProps } from "react"

interface CloseProps extends SVGProps<SVGSVGElement> {
  color?: string
}
const SvgComponent = ({color = "#D0D6F9", ...props}: CloseProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19.091 19.091"
    fill="none"
    {...props}
  >
    <g fill={color}>
      <path d="m2.121 0 16.97 16.97-2.12 2.122L0 2.122z" />
      <path d="M0 16.97 16.97 0l2.122 2.122-16.97 16.97z" />
    </g>
  </svg>
)
export default SvgComponent
