import React, { useEffect, useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions, Difficulty } from "./features/API";

const TOTAL_QUESTIONS = 10

function App() {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [number, setNumber] = useState(0);
	const [userAnswer, setUserAnswer] = useState([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startTrivia = async () => {};
	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
	const nextQuestion = () => {};

    useEffect(() => {
        console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))
        // setQuestions(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))
    })

	return (
		<>
			<h1>REACT QUIZZ</h1>
			<button className="start" onClick={startTrivia}>
				Start
			</button>
			<p className="score">Score: </p>
			<p>Loading Questions ...</p>
			{/* <QuestionCard
				questionNr={number+1}
				answers={questions[number].answers}
				callback={checkAnswer}
				userAnswer={userAnswer ? userAnswer[number] : undefined}
				question={questions[number].question}
				totalQuestions={TOTAL_QUESTIONS}
			/> */}
			<button className="next" onClick={nextQuestion}>
				Next Question
			</button>
		</>
	);
}

export default App;
