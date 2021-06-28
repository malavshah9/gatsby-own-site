import React from "react"
import { Header } from "./header.styled"

const HeaderComponent = ({ text }) => {
  return (
    <Header>
      <h1>{text}</h1>
    </Header>
  )
}

export default HeaderComponent
