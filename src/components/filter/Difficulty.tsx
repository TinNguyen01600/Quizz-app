import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Difficulty as Diff } from "../../features/API";
import React from "react";

type Props = {
	setDifficulty: (difficulty: Diff) => void;
};
const Difficulty: React.FC<Props> = ({ setDifficulty }) => {
	return (
		<>
			<h2>Difficulty</h2>
			<Box>
				<ButtonGroup
					variant="text"
					aria-label="text button group"
					size="large"
					color="secondary"
				>
					<Button
						sx={{ fontWeight: 500, color: "purple" }}
						onClick={() => setDifficulty(Diff.EASY)}
					>
						Easy
					</Button>
					<Button
						sx={{ fontWeight: 500, color: "purple" }}
						onClick={() => setDifficulty(Diff.MEDIUM)}
					>
						Medium
					</Button>
					<Button
						sx={{ fontWeight: 500, color: "purple" }}
						onClick={() => setDifficulty(Diff.HARD)}
					>
						Hard
					</Button>
				</ButtonGroup>
			</Box>
		</>
	);
};

export default Difficulty;
