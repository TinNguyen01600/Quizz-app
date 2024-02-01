import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore
import bg from "../img/bg.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }
    body {
        background: url(${bg}) no-repeat center center/cover;
        background-attachment: fixed;
        font-family: 'Single Day', cursive;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    gap: 3vh;
	h1 {
		filter: drop-shadow(4px 4px #0085a3); // make the text drop shadow
		font-size: 8vh;
        border: 2px solid white;
        padding: 1vh 4vw;
        background: rgba(0,0,0, 0.3);
        color: #ffdb58;
        margin-top: 3vh;
	}
    .score {
        border: 2px solid white;
		font-size: 5vh;
        filter: drop-shadow(4px 4px #323b3c);
        background: rgba(50, 59, 60, 0.7);
        color: white;
        padding: 1vh;
	}
    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        font-family: 'Single Day', cursive;
        font-size: 5vh;
        padding: 0 2vw
    }
`;
