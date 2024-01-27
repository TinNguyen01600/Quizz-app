// create logic for fetching data from the API

import axios from "axios";
import { shuffleArray } from "./uitls";

export type Question = {
	category: string;
	correct_answer: string;
	incorrect_answers: string[];
	difficulty: string;
	question: string;
	type: string;
};
export type QuestionState = Question & { answers: string[] };
export enum Difficulty {
	EASY = "easy",
	MEDIUM = "medium",
	HARD = "hard",
}
export const fetchQuizQuestions = async (
	amount: number,
	difficulty: Difficulty
) => {
	const res = await axios(
		`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
	);
	const data = res.data;
	return data.results.map((question: Question) => ({
		...question,
		answers: shuffleArray([
			...question.incorrect_answers,
			question.correct_answer,
		]),
	}));
};
