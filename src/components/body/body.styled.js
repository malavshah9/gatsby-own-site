import styled, { css } from "styled-components"

const mobileView = "610px"
const StyledFlexHalf = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
`

export const StyledTextWrapper = styled.div`
  font-size: 55px;
`

export const StyledWrapperLeft = styled.div`
  ${StyledFlexHalf}
  @media (max-width: ${mobileView}) {
    margin-top: 100px;
    height: 55%;
  }
`
export const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: ${mobileView}) {
    flex-direction: column;
  }
`

export const StyledWrapperRight = styled.div`
  ${StyledFlexHalf}
  align-items:center;
  font-size: ${({ theme }) => theme.fontSizeMidHeading};
  @media (max-width: ${mobileView}) {
    margin-top: 80px;
    margin-right: 100%;
    margin-bottom: 80px;
    width: 100%;
  }
`
