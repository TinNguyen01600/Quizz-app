import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

type Props = {
	category: string;
	setCategory: (category: string) => void;
};
const MyRadioGroup: React.FC<Props> = ({ category, setCategory }) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCategory((event.target as HTMLInputElement).value);
	};
	return (
		<FormControl>
			<FormLabel id="demo-controlled-radio-buttons-group">
				<h2>Categories</h2>
			</FormLabel>
			<RadioGroup
				row
				aria-labelledby="demo-controlled-radio-buttons-group"
				name="controlled-radio-buttons-group"
				value={category}
				onChange={handleChange}
				sx={{ color: "purple" }}
			>
				<FormControlLabel
					value="art"
					control={<Radio sx={radioStyle} />}
					label="Art"
				/>
				<FormControlLabel
					value="animals"
					control={<Radio sx={radioStyle} />}
					label="Animals"
				/>
				<FormControlLabel
					value="geography"
					control={<Radio sx={radioStyle} />}
					label="Geography"
				/>
				<FormControlLabel
					value="history"
					control={<Radio sx={radioStyle} />}
					label="History"
				/>
				<FormControlLabel
					value="sports"
					control={<Radio sx={radioStyle} />}
					label="Sports"
				/>
				<FormControlLabel
					value="celebrities"
					control={<Radio sx={radioStyle} />}
					label="Celebrities"
				/>
				<FormControlLabel
					value="politics"
					control={<Radio sx={radioStyle} />}
					label="Politics"
				/>
			</RadioGroup>
		</FormControl>
	);
};

const radioStyle: object = {
	color: "purple",
	"&.Mui-checked": {
		color: "purple",
	},
};

export default MyRadioGroup;
