import * as React from "react"

const MenuNavBar = (props) => (
  <svg
    width={36}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={36} height={5} rx={2} fill="#43311F" />
    <rect y={12} width={36} height={5} rx={2} fill="#43311F" />
    <rect y={24} width={36} height={5} rx={2} fill="#43311F" />
  </svg>
)

export default MenuNavBar
