import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
	const [activeTheme, setActiveTheme] = useState('light');

	const changeActiveTheme = () => {
		setActiveTheme((prevState) => {
			const newTheme = prevState === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			return newTheme;
		});
	};

	useEffect(() => {
		const chosenTheme = localStorage.getItem('theme');
		if (chosenTheme) setActiveTheme(chosenTheme);
		else setActiveTheme('light');
	}, []);

	const context = {
		activeTheme,
		changeActiveTheme,
	};

	return (
		<ThemeContext.Provider value={context}>
			{children}
		</ThemeContext.Provider>
	);
}

export { ThemeContextProvider };
export default ThemeContext;
