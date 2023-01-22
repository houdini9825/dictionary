import styles from './WordHeader.module.scss';
import classname from 'classname';
import PlayButton from '../PlayButton/PlayButton';
import { useContext } from 'react';
import ThemeContext from '../../../contexts/theme-context';

function WordHeader({ word, phonetic, audioLink, className }) {
	const { activeTheme } = useContext(ThemeContext);

	const containerClasses = classname(
		styles.container,
		{
			[styles.light]: activeTheme === 'light',
			[styles.dark]: activeTheme === 'dark',
		},
		className
	);

	return (
		<div className={containerClasses}>
			<div>
				<h1>{word}</h1>
				{phonetic && <p>{phonetic}</p>}
			</div>
			{audioLink && <PlayButton audioLink={audioLink} />}
		</div>
	);
}

export default WordHeader;
