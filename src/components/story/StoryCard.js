import { useContext, useState } from 'react';

import { StoriesContext } from '../../contexts/storiesContext';
import Tag from './Tag';

const StoryCard = ({ story }) => {
	const [newsStory] = useState({
		headline: story.story.headline,
		authorName: story.story['author-name'].toUpperCase(),
		timestamp: new Date(story.story['created-at']).toDateString().toUpperCase().substring(4),
		tags: story.story.tags.slice(0, 2)
	});
	const { favoriteStories, dispatch } = useContext(StoriesContext);

	return (
		<div className="story-card">
			<div className="story-card__image" />
			<div className="story-card__details">
				<div className="story-card__details__category">
					<h6>GROUND REPORT</h6>
					<div className="horizontal-bar"></div>
				</div>
				<h4 className="story-card__details__headline">{newsStory.headline}</h4>
				<h6 className="story-card__details__author-timestamp text-secondary">{`${newsStory.authorName} • ${newsStory.timestamp}`}</h6>
				<div className="story-card__details__tags-p-like">
					<div className="tags-collection">
						{newsStory.tags.map((tag) => (
							<Tag key={tag.id} tagName={tag.name} />
						))}
					</div>

					{favoriteStories.includes(story.id) ? (
						<button
							className="btn"
							onClick={() => dispatch({ type: 'REMOVE_FAVORITE', id: story.id })}
						>
							<img src="/images/favorite_icon_filled.png" alt="" />
						</button>
					) : (
						<button
							className="btn"
							onClick={() => dispatch({ type: 'ADD_FAVORITE', id: story.id })}
						>
							<img src="/images/favorite_icon_base.png" alt="" />
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default StoryCard;
