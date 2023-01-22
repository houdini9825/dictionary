import styles from './App.module.scss';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import { useContext, useEffect } from 'react';
import ThemeContext from './contexts/theme-context';
import Input from './components/UI/Input/Input';
import classname from 'classname';
import useGetData from './hooks/use-get-data';

function App() {
	const { activeTheme } = useContext(ThemeContext);
	const [currentWord, getData] = useGetData();

	const pageClasses = classname(styles.page, {
		[styles.light]: activeTheme === 'light',
		[styles.dark]: activeTheme === 'dark',
	});

	const renderedBody = currentWord.empty ? null : <Body data={currentWord} />;

	useEffect(() => {
		getData('home');
	}, []);

	return (
		<div className={pageClasses}>
			<div className={styles.container}>
				<Header />
				<Input onSubmit={getData} className={styles.input} />
				{renderedBody}
			</div>
		</div>
	);
}

export default App;
