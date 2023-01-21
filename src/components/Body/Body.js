import styles from './Body.module.scss';
import Synonyms from './Synonyms/Synonyms';
import WordHeader from './WordHeader/WordHeader';
import Input from '../UI/Input/Input';
import List from '../UI/List/List'
import TestData from '../../testdata.json'

const data = TestData[0]

const synonyms = data.synonyms

const renderedLists = data.meanings.map((d, i) => {
  return <List key={i} partOfSpeech={d.partOfSpeech} definitions={d.definitions} />
})

function Body() {
	return (
		<div className={styles.container}>
			<Input />
      <WordHeader word={data.word} phonetic={data.phonetic} audioLink={'test'} />
      {synonyms && <Synonyms data={synonyms}/>}
      {renderedLists}
		</div>
	);
}

export default Body
