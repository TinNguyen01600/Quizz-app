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

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> p {
		color: white;
	}
	.score {
		color: white;
		font-size: 5vh;
		margin: 0;
	}

	h1 {
		filter: drop-shadow(4px 4px #0085a3); // make the text drop shadow
		font-size: 8vh;
		margin: 5vw;
        border: 2px solid white;
        padding: 1vh 4vw;
        background: rgba(0,0,0, 0.3);
	}

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 7vh;
        margin: 3vh 0;
        padding: 0 7vh;
    }

    .start {
        max-width: 200px;
    }
`;
