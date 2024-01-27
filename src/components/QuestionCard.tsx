import React from "react";

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
		<>
			<p className="number">
				Question: {questionNr} / {totalQuestions}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }}></p>
			<div className="answers">
				{answers.map((answer, id) => (
					<div key={id}>
						<button disabled={!!userAnswers} value={answer} onClick={callback}>
							<span
								dangerouslySetInnerHTML={{ __html: answer }}
							/>
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default QuestionCard;
