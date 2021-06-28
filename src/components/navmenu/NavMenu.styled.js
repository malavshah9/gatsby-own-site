import styled from "styled-components"

export const StyledMenuContainer = styled.ul`
  color: ${({ theme }) => theme.primaryFont};
  display: flex;
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
