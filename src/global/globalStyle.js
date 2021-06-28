import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins-black';
        src: url('../../static/fonts/Poppins-Black.ttf') format("ttf");
    }
    @font-face {
        font-family: 'Poppins-bold';
        src: url('../../static/fonts/Poppins-Bold.ttf') format("ttf");;
    }
    @font-face {
        font-family: 'Poppins-Medium';
        src: url('../../static/fonts/Poppins-Medium.ttf') format("ttf");;
    }
    @font-face {
        font-family: 'Poppins';
        src: url('../../static/fonts/Poppins-Regular.ttf') format("ttf");;
    }
    body,html{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ${({ theme }) => theme.primaryBackground};
        color: ${({ theme }) => theme.primaryFont};
        font-family: "Poppins-Regular", sans-serif;
        height: 93%;
    }   
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #___gatsby{
        height: 100%;
    }
    #gatsby-focus-wrapper{
        height: 100%;
    }
`
export default GlobalStyle
