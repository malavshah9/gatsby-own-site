import * as React from "react"
import PropTypes from "prop-types"

import { StyledLayoutWrapper } from "./layout.styled"
import Header from "../components/header/header.component"
import Body from "../components/body/body.component"
import Footer from "../components/footer/Footer.component"

const Layout = ({ children }) => {
  return (
    <StyledLayoutWrapper>
      <Header text="Malav Shah" />
      <Body />
      <Footer />
    </StyledLayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
