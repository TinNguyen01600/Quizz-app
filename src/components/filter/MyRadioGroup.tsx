import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";

type Props = {};
const MyRadioGroup: React.FC<Props> = ({}) => {
	const [value, setValue] = useState("female");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};
	return (
		<FormControl>
			<FormLabel
				id="demo-controlled-radio-buttons-group"
				sx={{
					fontSize: "5vh",
					fontFamily: "Single Day",
				}}
			>
				Categories
			</FormLabel>
			<RadioGroup
				aria-labelledby="demo-controlled-radio-buttons-group"
				name="controlled-radio-buttons-group"
				value={value}
				onChange={handleChange}
			>
				<FormControlLabel value="art" control={<Radio />} label="Art" />
				<FormControlLabel
					value="animals"
					control={<Radio />}
					label="Animals"
				/>
			</RadioGroup>
		</FormControl>
	);
};

export default MyRadioGroup;
