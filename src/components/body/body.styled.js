import styled, { css } from "styled-components"

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
`
export const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

export const StyledWrapperRight = styled.div`
  ${StyledFlexHalf}
  align-items:center;
  font-size: ${({ theme }) => theme.fontSizeMidHeading};
`
