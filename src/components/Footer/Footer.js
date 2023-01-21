import styles from './Footer.module.scss';
import NewWindowImg from '../../images/icon-new-window.svg';
import classname from 'classname';
import { useContext } from 'react';
import ThemeContext from '../../contexts/theme-context'

function Footer({link}) {
  const {activeTheme} = useContext(ThemeContext)

  const footerClasses = classname((styles.footer), {
    [styles.light]: activeTheme === 'light',
    [styles.dark]: activeTheme === 'dark'
  })

	return (
		<footer className={footerClasses}>
      <p>Source</p>
      <a href={link}>{link}<img src={NewWindowImg} /></a>
		</footer>
	);
}

export default Footer;
