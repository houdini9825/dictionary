import styles from './WordHeader.module.scss';
import classname from 'classname';
import PlayButton from '../PlayButton/PlayButton';
import { useContext } from 'react';
import ThemeContext from '../../../contexts/theme-context';

function WordHeader({word, phonetic, audioLink}) {
  const {activeTheme} = useContext(ThemeContext)

  const containerClasses = classname((styles.container), {
    [styles.light]: activeTheme === 'light',
    [styles.dark]: activeTheme === 'dark'
  })
	return (
		<div className={containerClasses}>
			<div>
				<h1>{word}</h1>
        <p>{phonetic}</p>
			</div>
      <PlayButton audioLink={audioLink}/>
		</div>
	);
}

export default WordHeader;
