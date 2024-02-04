import { useState } from "react";
import MySlider from "./MySlider";
import MyRadioGroup from "./MyRadioGroup";
import { Wrapper } from "../../styles/Filter.styles";
import Difficulty from "./Difficulty";

const Filter = () => {
	const [totalQuestions, setTotalQuestions] = useState<number>(10);
	const [category, setCategory] = useState<string>("art");

	return (
		<Wrapper>
			<MySlider
				totalQuestions={totalQuestions}
				setTotalQuestions={setTotalQuestions}
			/>
			<MyRadioGroup category={category} setCategory={setCategory} />
            <Difficulty />
		</Wrapper>
	);
};

export default Filter;
