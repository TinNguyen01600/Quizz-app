import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore
import bg from '../img/bg.jpg'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }
    body {
        background: url(${bg}) no-repeat center center/cover;
        background-attachment: fixed;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        color: red;
    }
    * {
        box-sizing: border-box
    }
`;
