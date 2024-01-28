import styled from "styled-components";

export const Wrapper = styled.div`
    background: rgba(73, 75, 68, 0.7);
	padding: 2vh 3vw;
	box-shadow: 0px 5px 10px rgba(0, 0, 0);
	text-align: center;
    max-width: 80%;
	p {
		font-size: 5vh;
        font-weight: 700;
	}
`;

type ButtonWrapperProps = {
	correct: boolean;
	userClicked: boolean;
};
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
	button {
        font-family: 'Single Day', cursive;
		cursor: pointer;
		user-select: none; // user cant select the text
		font-size: 5vh;
		width: 100%;
		margin: 1vh 0;
        border: 3px solid white;
        padding: 0.5vh 2vw;
		background: ${({ correct, userClicked }) =>
			correct
				? "linear-gradient(90deg, #56ffa4, #59bc86)"
				: !correct && userClicked
				? "linear-gradient(90deg, #ff5656, #c16868)"
				: "linear-gradient(90deg, #80a29f, #6eafb4)"};
	}
`;
