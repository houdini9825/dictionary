import styles from './Synonyms.module.scss';


function Synonyms({ data }) {



	return (
		<div className={styles.container}>
			<p className={styles.label}>Synonyms</p>
      <p className={styles.data}>{data.join(' - ')}</p>
		</div>
	);
}

export default Synonyms;
