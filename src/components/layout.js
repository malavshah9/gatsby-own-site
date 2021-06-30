import * as React from "react"
import PropTypes from "prop-types"

import { StyledLayoutWrapper, StyledHeaderContainer } from "./layout.styled"
import Header from "../components/header/header.component"
import NavMenu from "../components/navmenu/NavMenu.component"
import Body from "../components/body/body.component"
import Footer from "../components/footer/Footer.component"

import { LINKS } from "../util/constants"

const Layout = ({ children }) => {
  return (
    <StyledLayoutWrapper>
      <StyledHeaderContainer>
        <Header text="Malav Shah" />
        <NavMenu navItems={LINKS} />
      </StyledHeaderContainer>
      <Body />
      <Footer />
    </StyledLayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
