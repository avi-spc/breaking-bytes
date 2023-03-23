import StoryCard from './StoryCard';

const StoriesCollection = ({ stories }) => {
	return (
		<div className="stories-collection">
			{!stories.length && <h4>Loading...</h4>}
			
			{stories.map((story) => (
				<StoryCard key={story.id} story={story} />
			))}
		</div>
	);
};

export default StoriesCollection;
