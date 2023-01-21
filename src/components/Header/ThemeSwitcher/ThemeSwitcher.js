import styles from './ThemeSwitcher.module.scss';
import classname from 'classname';
import { useContext } from 'react';
import ThemeContext from '../../../contexts/theme-context';
import MoonImage from './Moon';


function ThemeSwitcher({className}) {
	const { activeTheme, changeActiveTheme } = useContext(ThemeContext);

  const containerClasses = classname((styles.container), {
    [styles.light]: activeTheme === 'light',
    [styles.dark]: activeTheme === 'dark'
  }, className)

	const handleClick = () => {
		changeActiveTheme()
	}

	return (
		<div className={containerClasses}>
			<div onClick={handleClick}><button></button></div>
      <MoonImage className={styles.svg} />
		</div>
	);
}

export default ThemeSwitcher;
