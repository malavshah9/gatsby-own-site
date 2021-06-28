import styled from "styled-components"

export const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.primaryFont};
  font-size: ${({ theme }) => theme.fontSizeRegular};

  & .heart {
    color: red;
    font-size: ${({ theme }) => theme.fontSizeMidHeading};
  }
`
