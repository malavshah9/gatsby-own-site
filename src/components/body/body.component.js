import React from "react"
import {
  StyledTextWrapper,
  StyledWrapperLeft,
  StyledMainWrapper,
  StyledWrapperRight,
} from "./body.styled"
import Typing from "../../components/typing/typing.component"
import { CONSTANTS } from "../../util/constants"

const Body = () => {
  return (
    <StyledMainWrapper>
      <StyledWrapperLeft>
        <StyledTextWrapper>{CONSTANTS.COPY_TEXT.IM}</StyledTextWrapper>
        <Typing strings={[CONSTANTS.COPY_TEXT.PROFESSION]} />
      </StyledWrapperLeft>
      <StyledWrapperRight>{CONSTANTS.COPY_TEXT.FEW_LINES}</StyledWrapperRight>
    </StyledMainWrapper>
  )
}
export default Body
