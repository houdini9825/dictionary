import styles from './NoneFound.module.scss';
import classname from 'classname';
import { useContext } from 'react';
import ThemeContext from '../../contexts/theme-context';

function NoneFound() {
	const { activeTheme } = useContext(ThemeContext);

	const containerClasses = classname(styles.container, {
		[styles.light]: activeTheme === 'light',
		[styles.dark]: activeTheme === 'dark',
	});

	return (
		<div className={containerClasses}>
			<p className={styles.emoji}>😕</p>
			<p className={styles.title}>No definitions found</p>
			<p className={styles.message}>
				Sorry, we couldn't find any definitions for the word you were
				looking for. You can head to the web to find out more about your
				interest, or perhaps just search for a different word.
			</p>
		</div>
	);
}

export default NoneFound;
