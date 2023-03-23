import { useContext, useEffect, useState } from 'react';

import { StoriesContext } from '../contexts/storiesContext';

import StoriesCollection from './StoriesCollection';

const Stories = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const { stories, searchedStories, populateSearchStories } = useContext(StoriesContext);
	const [isSearched, setIsSearched] = useState(false);

	const searchStories = (e) => {
		e.preventDefault();

		if (searchTerm.length > 0) {
			const filteredStories = stories.filter((story) =>
				story.story.headline.toLowerCase().includes(searchTerm.toLowerCase())
			);

			setIsSearched(true);
			populateSearchStories(filteredStories);
		}
	};

	useEffect(() => {
		if (!searchTerm.length) {
			setIsSearched(false);
		}
	}, [searchTerm]);

	return (
		<section className="stories">
			<h2 className="section-header">stories</h2>
			<div className="stories__form-p-btn">
				<form onSubmit={searchStories} className="stories__search-form">
					<input
						type="text"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder="search stories here..."
					/>
					{isSearched && (
						<button
							type="button"
							className="btn input-btn-cancel"
							onClick={() => setSearchTerm('')}
						>
							<img src="/images/cancel_search.png" alt="" />
						</button>
					)}
				</form>
				<button className="btn btn-search" onClick={searchStories}>
					<img src="/images/minimized_search_bar.png" alt="" />
				</button>
			</div>
			{isSearched && (
				<div className="stories__search-results">
					showing results for: <span>{searchTerm}</span>
				</div>
			)}
			{stories && !isSearched && <StoriesCollection stories={stories} />}
			{searchedStories.length > 0 && isSearched && (
				<StoriesCollection stories={searchedStories} />
			)}
		</section>
	);
};

export default Stories;
