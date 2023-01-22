import styles from './List.module.scss';
import classname from 'classname';
import ThemeContext from '../../../contexts/theme-context';
import { useContext } from 'react';

function List({ partOfSpeech, definitions, className }) {
	const { activeTheme } = useContext(ThemeContext);

	const containerClasses = classname(
		styles.container,
		{
			[styles.light]: activeTheme === 'light',
			[styles.dark]: activeTheme === 'dark',
		},
		className
	);

	const renderedItems = definitions.map((def, i) => {
		const example = def.example ? (
			<p className={styles.example}>"{def.example}"</p>
		) : null;
		return (
			<li key={i}>
				<p>{def.definition}</p>
				{example}
			</li>
		);
	});

	return (
		<div className={containerClasses}>
			<div className={styles.header}>
				<h2>{partOfSpeech}</h2>
				<div></div>
			</div>
			<h3>Meaning</h3>
			<ul>{renderedItems}</ul>
		</div>
	);
}

export default List;
