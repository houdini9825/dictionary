import styles from './PlayButton.module.scss';
import classname from 'classname';
import { useContext, useState } from 'react';
import ThemeContext from '../../../contexts/theme-context';

function PlayButton({audioLink, className}) {
	const { activeTheme } = useContext(ThemeContext);
  const [audoPlaying, setAudioPlaying] = useState(false)

	const btnClasses = classname(styles.button, {
		[styles.light]: activeTheme === 'light',
		[styles.dark]: activeTheme === 'dark',
	}, className);

  const handleClick = (e) => {

  }

	return (
		<button onClick={handleClick} className={btnClasses}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="75"
				height="75"
				viewBox="0 0 75 75"
			>
				<g fill="#A445ED" fillRule="evenodd">
					<circle className={styles.circle} cx="37.5" cy="37.5" r="37.5" opacity=".4" />
					<path className={styles.test} d="M29 27v21l21-10.5z" />
				</g>
			</svg>
		</button>
	);
}

export default PlayButton;
