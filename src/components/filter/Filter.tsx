import { useState } from "react";
import MySlider from "./MySlider";
import MyRadioGroup from "./MyRadioGroup";

const Filter = () => {
	const [totalQuestions, setTotalQuestions] = useState<number>(10);
	return (
		<>
			<MySlider
				totalQuestions={totalQuestions}
				setTotalQuestions={setTotalQuestions}
			/>
            <MyRadioGroup />
		</>
	);
};

export default Filter;
