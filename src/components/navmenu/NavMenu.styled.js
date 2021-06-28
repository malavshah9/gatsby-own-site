import styled from "styled-components"

export const StyledMenuContainer = styled.ul`
  color: ${({ theme }) => theme.primaryFont};
  display: flex;
  @media (max-width: 620px) {
    display: none;
  }
`
export const StyledListItem = styled.li`
  list-style: none;
  padding: 10px;
  cursor: pointer;
`
export const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryFont};
`
export const StyledNav = styled.nav`
  #check {
    display: none;
  }
`
export const StyledLabel = styled.label`
  margin-top: 6px;
  & .crossIcon {
    display: none;
  }
  & .hamIcon {
    display: none;
  }
  @media (max-width: 620px) {
    & .hamIcon {
      display: block;
    }
  }
`
