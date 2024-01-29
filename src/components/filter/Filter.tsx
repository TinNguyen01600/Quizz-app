import { useState } from "react";
import MySlider from "./MySlider";

const Filter = () => {
	const [totalQuestions, setTotalQuestions] = useState<number>(10);
	return (
		<>
			<MySlider
				totalQuestions={totalQuestions}
				setTotalQuestions={setTotalQuestions}
			/>
		</>
	);
};

export default Filter;
