import AboutEvents from './About';
import RecentEvent from './RecentEvent';
import UpcomingEvents from './UpcomingEvents';
import SpeakersAccolades from './SpeakersAccolades';
import EventPartners from './EventPartners';
import Footer from './Footer';

const Events = () => {
	return (
		<div className="events-section">
			<AboutEvents />
			<RecentEvent />
			<UpcomingEvents />
			<SpeakersAccolades />
			<EventPartners />
			<Footer />
		</div>
	);
};

export default Events;
