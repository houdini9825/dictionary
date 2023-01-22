import styles from './FontSelection.module.scss';
import classname from 'classname';
import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../../contexts/theme-context';
import { ReactComponent as DownArrow } from '../../../images/icon-arrow-down.svg';
import Modal from '../../UI/Modal/Modal';

const fonts = [
	{
		id: 'sans',
		name: 'Sans Serif',
	},
	{
		id: 'serif',
		name: 'Serif',
	},
	{
		id: 'mono',
		name: 'Mono',
	},
];

const setFont = (newFont) => {
	fonts.forEach((f) => {
		document.body.classList.remove(f.id);
	});

	document.body.classList.add(newFont);
};

function FontSelection({ className }) {
	const { activeTheme } = useContext(ThemeContext);
	const [activeFont, setActiveFont] = useState('sans');
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const chosenFont = localStorage.getItem('font');
		if (chosenFont) setActiveFont(chosenFont);
		else setActiveFont('sans');
		setFont(chosenFont ? chosenFont : 'sans');
	}, []);

	const handleLabelClick = (e) => {
		if (!e.target.closest(`.${styles.modal}`)) {
			setShowModal((prevState) => !prevState);
		}
	};

	const handleOptionClick = (e) => {
		const chosenFont = e.target.dataset.val;
		localStorage.setItem('font', chosenFont);
		setActiveFont(chosenFont);
		setShowModal(false);
		setFont(chosenFont);
	};

	const containerClasses = classname(
		styles.container,
		{
			[styles.light]: activeTheme === 'light',
			[styles.dark]: activeTheme === 'dark',
		},
		className
	);

	return (
		<div onClick={handleLabelClick} className={containerClasses}>
			<p>{fonts.find((f) => f.id === activeFont).name}</p>
			<DownArrow />
			{showModal && (
				<Modal
					onClick={handleOptionClick}
					className={styles.modal}
					data={fonts}
				/>
			)}
		</div>
	);
}

export default FontSelection;
