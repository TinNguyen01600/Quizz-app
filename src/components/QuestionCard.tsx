import React from "react";
import { Wrapper, ButtonWrapper } from "../styles/QuestionCard.styles";

export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};
type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswers: AnswerObject | undefined;
	questionNr: number;
	totalQuestions: number;
};
const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswers,
	questionNr,
	totalQuestions,
}) => {
	return (
		<Wrapper>
			<p className="number">
				Question: {questionNr} / {totalQuestions}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }}></p>
			<div className="answers">
				{answers.map((answer, id) => (
					<ButtonWrapper
						key={id}
						correct={userAnswers?.correctAnswer === answer}
						userClicked={userAnswers?.answer === answer}
					>
						<button
							disabled={!!userAnswers}
							value={answer}
							onClick={callback}
						>
							<span
								dangerouslySetInnerHTML={{ __html: answer }}
							/>
						</button>
					</ButtonWrapper>
				))}
			</div>
		</Wrapper>
	);
};

export default QuestionCard;
