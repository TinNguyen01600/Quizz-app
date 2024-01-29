# Trivia Quiz App

This project was inspired and instructed by [Weibenfalk](https://www.youtube.com/c/weibenfalk), for TypeScript learning purpose. /
Credit video [React / Typescript Tutorial - Build a Quiz App](https://www.youtube.com/watch?v=F2JCjVSZlG0&t=3802s)

## Table of content

[General Description](#general-description)

[Technologies](#technologies)

[Project Structure](#project-structure)

[Instruction](#instruction)

[React + TypeScript + Vite](#react--typescript--vite)

## General Description

> A Quiz App React application with multiple componenents using TypeScript, [Trivia API](https://opentdb.com/api_config.php); styled-component and framer-motion for styling.

## Technology

-   TypeScript
-   React + Vite
-   HTML / CSS
-   Axios
-   Material UI
-   Styled-component
-   Framer-motion

## Project Structure

[src](./src/)

-   [components/](./src/components)
    -   [QuestionCard.tsx](./src/components/QuestionCard.tsx)
-   [features/](./src/features)
    -   [API.ts](./src/features/API.ts)
    -   [uitls.ts](./src/features/uitls.ts)
-   [img/](./src/img)
    -   [bg.jpg](./src/img/bg.jpg)
    -   [spinner.gif](./src/img/spinner.gif)
-   [styles/](./src/styles)
    -   [App.styles.ts](./src/styles/App.styles.ts)
    -   [QuestionCard.styles.ts](./src/styles/QuestionCard.styles.ts)
-   [App.tsx](./src/App.tsx)
-   [main.tsx](./src/main.tsx)

## Instruction

1. Open your terminal and clone the repository with the following command:

```
git clone https://github.com/TinNguyen01600/Quizz-app
```

2. Install all the packages:

```
npm install
```

3. Start the application in your local machine:

```
npm run dev
```

\*\* Or simply access the deployed version on Netlify (https://tin-nguyen-quizz-game.netlify.app/).

<pre>
Package use: 
    "@emotion/react": "^11.11.3",
    "@emotion/styled": "^11.11.0",
    "@mui/material": "^5.15.6",
    "@types/styled-components": "^5.1.34",
    "axios": "^1.6.7",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "styled-components": "^6.1.8"
</pre>

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default {
	// other rules...
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json", "./tsconfig.node.json"],
		tsconfigRootDir: __dirname,
	},
};
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
