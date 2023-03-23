import { useContext } from 'react';
import { StoriesContext } from '../contexts/storiesContext';

const StoryCard = ({ story }) => {
	const { favoriteStories, dispatch } = useContext(StoriesContext);

	return (
		<div className="story-card">
			<img src="" alt="" />
			<span>ground report</span>
			<span></span>
			<p>{story.story.headline}</p>
			<div>{`${story.story['author-name']} • ${story.story['created-at']}`}</div>
			{favoriteStories.includes(story.id) ? (
				<button onClick={() => dispatch({ type: 'REMOVE_FAVORITE', id: story.id })}>
					UnFavorite
				</button>
			) : (
				<button onClick={() => dispatch({ type: 'ADD_FAVORITE', id: story.id })}>Favorite</button>
			)}
		</div>
	);
};

export default StoryCard;
