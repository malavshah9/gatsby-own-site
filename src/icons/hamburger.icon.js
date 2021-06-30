import React from "react"
import styled from "styled-components"

const StyledSvg = styled.svg`
  fill: ${({ theme }) => theme.primaryFont};
  cursor: pointer;
`

function HamburgerIcon({ height, width, ...props }) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      {...props}
    >
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
    </StyledSvg>
  )
}
HamburgerIcon.defaultProps = {
  height: "25px",
  width: "25px",
}
export default HamburgerIcon
