import { useState } from 'react';

const cleanData = (oldData) => {
	const data = oldData[0];

	const word = data.word ? data.word : '';
	const phonetic = data.phonetic ? data.phonetic : '';
	const audioSearch = data.phonetics.find((d) => d.audio);
	const audio = audioSearch ? audioSearch.audio : '';
	const link = data.sourceUrls.length ? data.sourceUrls[0] : '';
	const meanings = data.meanings.length ? data.meanings : [];
	const synonyms = data.meanings[0].synonyms.length
		? data.meanings[0].synonyms
		: [];

	return {
		empty: false,
		valid: true,
		word,
		phonetic,
		audio,
		link,
		meanings,
		synonyms,
	};
};

function useGetData() {
	const [currentWord, setCurrentWord] = useState({
		empty: true,
		valid: true,
		word: '',
		phonetic: '',
		audio: '',
		link: '',
		meanings: [],
		synonyms: [],
	});

	const getData = async (word) => {
		const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error('Invalid word');
			const data = await response.json();
			const newData = cleanData(data);
			setCurrentWord(newData);
		} catch (err) {
			setCurrentWord((prevState) => {
				return { ...prevState, valid: false };
			});
		}
	};

	return [currentWord, getData];
}

export default useGetData;
