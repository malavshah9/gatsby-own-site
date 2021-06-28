import React from "react"
import { StyledFooter } from "./Footer.styled"
import { CONSTANTS } from "../../util/constants"

const Footer = () => {
  return (
    <StyledFooter>
      <span
        dangerouslySetInnerHTML={{ __html: CONSTANTS.COPY_TEXT.FOOTER_MAKE }}
      ></span>
      <br />
      {CONSTANTS.COPY_TEXT.FOOTER_COPY_RIGHT}
    </StyledFooter>
  )
}

export default Footer
