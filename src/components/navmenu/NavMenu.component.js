import React, { useState } from "react"
import {
  StyledMenuContainer,
  StyledListItem,
  StyledAnchor,
  StyledNav,
  StyledLabel,
} from "./NavMenu.styled"
import HamIcon from "../../icons/hamburger.icon"
import CancelIcon from "../../icons/cancel.icon"

function NavMenu({ navItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <StyledNav>
      <StyledMenuContainer isOpen={isMenuOpen}>
        {navItems.map(item => {
          return (
            <StyledListItem>
              <StyledAnchor
                href={item.link}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                {item.name}
              </StyledAnchor>
            </StyledListItem>
          )
        })}
      </StyledMenuContainer>
      <input
        type="checkbox"
        id="check"
        onChange={() => setIsMenuOpen(isOpen => !isOpen)}
      />
      <StyledLabel htmlFor="check">
        <HamIcon className="hamIcon" />
        <CancelIcon className="crossIcon" />
      </StyledLabel>
    </StyledNav>
  )
}

export default NavMenu
