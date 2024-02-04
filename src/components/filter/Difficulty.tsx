import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from '@mui/material/Box';

const Difficulty = () => {
	return (
        <>
        <h2>Difficulty</h2>
        <Box>
			<ButtonGroup variant="text" aria-label="text button group" size="large">
				<Button sx={{fontWeight: 500, color: "purple"}}>Easy</Button>
				<Button sx={{fontWeight: 500, color: "purple"}}>Medium</Button>
				<Button sx={{fontWeight: 500, color: "purple"}}>Hard</Button>
			</ButtonGroup>
		</Box>
        </>
		
	);
};

export default Difficulty;
