import { createContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';

import { storiesReducer } from '../reducers/storiesReducer';

export const StoriesContext = createContext();

const StoriesContextProvider = (props) => {
	const [stories, setStories] = useState([]);
	const [searchedStories, setSearchedStories] = useState([]);
	const [favoriteStories, dispatch] = useReducer(storiesReducer, [], () => {
		const localData = localStorage.getItem('favoriteStories');

		return localData ? JSON.parse(localData) : [];
	});

	const fetchStories = async () => {
		const { data } = await axios.get(
			'https://cors-anywhere.herokuapp.com/https://ace.qtstage.io/api/v1/collections/entertainment',
			{
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
				}
			}
		);

		setStories(data.items);
	};

	const populateSearchStories = (stories) => {
		setSearchedStories(stories);
	};

	useEffect(() => {
		fetchStories();
	}, []);

	useEffect(() => {
		localStorage.setItem('favoriteStories', JSON.stringify(favoriteStories));
	}, [favoriteStories]);

	return (
		<StoriesContext.Provider
			value={{ stories, searchedStories, favoriteStories, populateSearchStories, dispatch }}
		>
			{props.children}
		</StoriesContext.Provider>
	);
};

export default StoriesContextProvider;
