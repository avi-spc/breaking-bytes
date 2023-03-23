import StoryCard from './StoryCard';

const StoriesCollection = ({ stories }) => {
	return (
		<section className="stories-collection">
			{stories.map((story) => (
				<StoryCard key={story.id} story={story} />
			))}
		</section>
	);
};

export default StoriesCollection;
