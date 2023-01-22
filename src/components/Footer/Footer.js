import styles from './Footer.module.scss';
import NewWindowImg from '../../images/icon-new-window.svg';
import classname from 'classname';
import { useContext } from 'react';
import ThemeContext from '../../contexts/theme-context';

function Footer({ link, className }) {
	const { activeTheme } = useContext(ThemeContext);

	const footerClasses = classname(
		styles.footer,
		{
			[styles.light]: activeTheme === 'light',
			[styles.dark]: activeTheme === 'dark',
		},
		className
	);

	return (
		<footer className={footerClasses}>
			<hr />
			<div>
				<p>Source</p>
				<a target="_blank" href={link}>
					{link}
					<img src={NewWindowImg} />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
