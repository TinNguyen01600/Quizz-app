// randomize the answers to the questions

export const shuffleArray = (arr: any[]) =>
	[...arr].sort(() => Math.random() - 0.5);
