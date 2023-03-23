import { useContext } from 'react';

import { StoriesContext } from '../contexts/storiesContext';

import StoriesCollection from './StoriesCollection';

const FavoriteStories = () => {
	const { stories, favoriteStories } = useContext(StoriesContext);

	const extractFavoriteStories = () => {
		return stories.filter((story) => favoriteStories.includes(story.id));
	};

	return (
		<section className="stories">
			<h2 className="section-header">favorites</h2>
			{favoriteStories.length > 0 ? (
				<StoriesCollection stories={extractFavoriteStories()} />
			) : (
				<h4>You don't have any favorites yet</h4>
			)}
		</section>
	);
};

export default FavoriteStories;
