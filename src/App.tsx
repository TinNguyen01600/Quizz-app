import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./features/API";
import spinner from "./img/spinner.gif";

const TOTAL_QUESTIONS = 10;
type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

function App() {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setuserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);
		const newQuestions = await fetchQuizQuestions(
			TOTAL_QUESTIONS,
			Difficulty.EASY
		);
		setQuestions(newQuestions);
		setScore(0);
		setuserAnswers([]);
		setNumber(0);
		setLoading(false);
	};
	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			// User's answer
			const answer = e.currentTarget.value;
			// check answer against the correct answer
			const correct = questions[number].correct_answer === answer;
			// adjust the score
			{
				correct && setScore((prev) => prev + 1);
			}
			// save answer in the array for user answers
			const answerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer,
			};
			setuserAnswers((prev) => [...prev, answerObject]);
		}
	};
	const nextQuestion = () => {};

	return (
		<>
			<h1>REACT QUIZZ</h1>
			{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
				<button className="start" onClick={startTrivia}>
					Start
				</button>
			) : null}
			{!gameOver && <p className="score">Score: {score}</p>}
			{loading && <img src={spinner} alt="Loading" />}
			{!loading && !gameOver && (
				<QuestionCard
					questionNr={number + 1}
					answers={questions[number].answers}
					callback={checkAnswer}
					userAnswers={userAnswers ? userAnswers[number] : undefined}
					question={questions[number].question}
					totalQuestions={TOTAL_QUESTIONS}
				/>
			)}
			{!loading &&
				!gameOver &&
				userAnswers.length === number + 1 &&
				number !== TOTAL_QUESTIONS - 1 && (
					<button className="next" onClick={nextQuestion}>
						Next Question
					</button>
				)}
		</>
	);
}

export default App;
