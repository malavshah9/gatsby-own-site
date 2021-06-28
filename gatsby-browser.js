/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { ThemeProvider } from "styled-components"
import { Theme } from "./src/theme/default"
import GlobalStyles from "./src/global/globalStyle"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  )
}
export const wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  )
}
