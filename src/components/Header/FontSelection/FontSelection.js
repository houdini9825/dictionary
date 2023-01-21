import styles from './FontSelection.module.scss';
import classname from 'classname';
import { useContext, useState } from 'react';
import ThemeContext from '../../../contexts/theme-context';
import {ReactComponent as DownArrow} from '../../../images/icon-arrow-down.svg'
import Modal from '../../UI/Modal/Modal';

const fonts = ['sans serif', 'serif', 'mono']

function FontSelection({ className }) {
	const { activeTheme } = useContext(ThemeContext);
	const [activeFont, setActiveFont] = useState('sans serif');
  const [showModal, setShowModal] = useState(false)

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
			<p>{activeFont}</p>
      <DownArrow />
      {showModal && <Modal data={fonts} />}
		</div>
	);
}

export default FontSelection;
