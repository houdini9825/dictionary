import styles from './App.module.scss';
import classNames from 'classname';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TestData from './testdata.json';
import { useContext } from 'react';
import ThemeContext from './contexts/theme-context';
import classname from 'classname';

function App() {
	const data = ['sans serif', 'serif', 'Mono'];
  const {activeTheme} = useContext(ThemeContext)

  const pageClasses = classname((styles.page), {
    [styles.light]: activeTheme === 'light',
    [styles.dark]: activeTheme === 'dark'
  })

	return (
		<div className={pageClasses}>
			<div className={styles.container}>
				<Header />
				<Body />
				<Footer link={'https://google.com'} />
			</div>
		</div>
	);
}

export default App;
