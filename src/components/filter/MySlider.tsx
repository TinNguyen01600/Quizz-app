import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

type Props = {
	totalQuestions: number;
	setTotalQuestions: (totalQuestions: number) => void;
};
const MySlider: React.FC<Props> = ({ totalQuestions, setTotalQuestions }) => {
	const handleChange = (event: Event, newValue: number | number[]) => {
		setTotalQuestions(newValue as number);
	};
	return (
		<>
        <h2>Number of questions</h2>
			<Box sx={{ width: 300 }}>
				<Slider
					aria-label="Temperature"
					defaultValue={10}
					value={totalQuestions}
					onChange={handleChange}
					valueLabelDisplay="auto"
					step={1}
					min={1}
					max={50}
					sx={{ color: "purple" }}
				/>
			</Box>
		</>
	);
};

export default MySlider;
