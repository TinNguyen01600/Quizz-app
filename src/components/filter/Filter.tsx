import { useState } from "react";
import MySlider from "./MySlider";
import MyRadioGroup from "./MyRadioGroup";
import { Wrapper } from "../../styles/Filter.styles";
import Difficulty from "./Difficulty";
import { Difficulty as Diff } from "../../features/API";

const Filter = () => {
	const [totalQuestions, setTotalQuestions] = useState<number>(10);
	const [category, setCategory] = useState<string>("art");
    const [difficulty, setDifficulty] = useState<Diff>(Diff.EASY)

	return (
		<Wrapper>
			<MySlider
				totalQuestions={totalQuestions}
				setTotalQuestions={setTotalQuestions}
			/>
			<MyRadioGroup category={category} setCategory={setCategory} />
            <Difficulty setDifficulty={setDifficulty}/>
		</Wrapper>
	);
};

export default Filter;
