import React from "react"
import TypeWriter from "typewriter-effect"
import { StyledTypingWrapper } from "./typing.styled"

const Typing = ({ strings }) => {
  return (
    <StyledTypingWrapper>
      <TypeWriter
        options={{
          strings,
          devMode: false,
          autoStart: true,
          loop: true,
          wrapperClassName: "wrapper",
          cursorClassName: "cursor",
        }}
      />
    </StyledTypingWrapper>
  )
}

export default Typing
