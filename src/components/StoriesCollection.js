import StoryCard from './StoryCard';

const StoriesCollection = ({ stories }) => {
	return (
		<div className="stories-collection">
			{stories.map((story) => (
				<StoryCard key={story.id} story={story} />
			))}
		</div>
	);
};

export default StoriesCollection;
