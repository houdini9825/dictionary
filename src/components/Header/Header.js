import styles from './Header.module.scss';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import FontSelection from './FontSelection/FontSelection';
import DocImage from '../../images/logo.svg';

function Header({ className }) {
	return (
		<div className={`${styles.container} ${className}`}>
			<img src={DocImage} />
			<div className={styles.optionsContainer}>
				<FontSelection />
				<ThemeSwitcher />
			</div>
		</div>
	);
}

export default Header;
