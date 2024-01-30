import { useState } from "react";
import MySlider from "./MySlider";
import MyRadioGroup from "./MyRadioGroup";

const Filter = () => {
	const [totalQuestions, setTotalQuestions] = useState<number>(10);
	const [category, setCategory] = useState<string>("art");

	return (
		<>
			<MySlider
				totalQuestions={totalQuestions}
				setTotalQuestions={setTotalQuestions}
			/>
			<MyRadioGroup category={category} setCategory={setCategory} />
		</>
	);
};

export default Filter;
