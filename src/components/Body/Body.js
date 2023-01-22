import styles from './Body.module.scss';
import Synonyms from './Synonyms/Synonyms';
import WordHeader from './WordHeader/WordHeader';
import List from '../UI/List/List';
import NoneFound from '../NoneFound/NoneFound';
import Footer from '../Footer/Footer';

function Body({ className, data }) {
	const renderedLists = data.meanings.map((d) => {
		return (
			<List
				className={styles.list}
				key={d.partOfSpeech}
				partOfSpeech={d.partOfSpeech}
				definitions={d.definitions}
			/>
		);
	});

	let content;

	if (!data.valid) {
		content = <NoneFound />;
	} else {
		content = (
			<div className={className}>
				<WordHeader
					className={styles.header}
					word={data.word}
					phonetic={data.phonetic}
					audioLink={data.audio}
				/>
				{data.synonyms.length ? (
					<Synonyms className={styles.syn} data={data.synonyms} />
				) : null}
				{renderedLists}
				{data.link && (
					<Footer className={styles.footer} link={data.link} />
				)}
			</div>
		);
	}
	return content;
}

export default Body;
