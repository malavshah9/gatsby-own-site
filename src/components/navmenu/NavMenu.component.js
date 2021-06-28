import React from "react"
import {
  StyledMenuContainer,
  StyledListItem,
  StyledAnchor,
} from "./NavMenu.styled"

function NavMenu({ navItems }) {
  return (
    <nav>
      <StyledMenuContainer>
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
    </nav>
  )
}

export default NavMenu
