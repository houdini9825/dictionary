import styles from './Input.module.scss';
import classname from 'classname';
import { useContext, useState } from 'react';
import SearchImage from '../../../images/icon-search.svg';
import ThemeContext from '../../../contexts/theme-context';

function Input({ className, onSubmit }) {
	const { activeTheme } = useContext(ThemeContext);
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
    if (!inputValue) {
      setError(true)
    }
	};

	const handleChange = (e) => {
		setInputValue(e.target.value);
    setError(false)
	};

	const formClasses = classname(
		styles.form,
		styles.error,
		{
			[styles.light]: activeTheme === 'light',
			[styles.dark]: activeTheme === 'dark',
			[styles.error]: error,
		},
		className
	);

	const errorMessage = (
		<p className={styles.errorMsg}>Whoops, can't be empty...</p>
	);

	return (
		<div className={styles.container}>
			<form className={formClasses} onSubmit={handleSubmit}>
				<input
					placeholder="Search for any word..."
					value={inputValue}
					onChange={handleChange}
				/>
				<button>
					<img src={SearchImage} />
				</button>
			</form>
			{error && errorMessage}
		</div>
	);
}

export default Input;
