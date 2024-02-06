import MySlider from "./MySlider";
import MyRadioGroup from "./MyRadioGroup";
import { Wrapper } from "../../styles/Filter.styles";
import Difficulty from "./Difficulty";
import { Difficulty as Diff } from "../../features/API";

type Props = {
    totalQuestions: number,
    setTotalQuestions: (totalQuestions: number) => void,
    category: string,
    setCategory: (category: string) => void,
    setDifficulty: (difficulty: Diff) => void;
}

const Filter: React.FC<Props> = ({
    totalQuestions,
    setTotalQuestions,
    category,
    setCategory,
    setDifficulty
}) => {
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
