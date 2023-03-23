import { useContext, useState } from 'react';

import { StoriesContext } from '../contexts/storiesContext';

import StoriesCollection from './StoriesCollection';

const Stories = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const { stories, searchedStories, populateSearchStories } = useContext(StoriesContext);

	const searchStories = (e) => {
		e.preventDefault();

		const filteredStories = stories.filter((story) =>
			story.story.headline.toLowerCase().includes(searchTerm.toLowerCase())
		);

		populateSearchStories(filteredStories);
	};

	return (
		<section className="stories">
			<h2>stories</h2>
			<form onSubmit={searchStories}>
				<input
					type="text"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</form>
			{stories && searchedStories.length === 0 && <StoriesCollection stories={stories} />}
			{searchStories.length > 0 && <StoriesCollection stories={searchedStories} />}
		</section>
	);
};

export default Stories;
