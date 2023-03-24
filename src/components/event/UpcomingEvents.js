import { Fragment } from 'react';

const UpcomingEvents = () => {
	return (
		<Fragment>
			<div className="upcoming-events">
				<div className="separator-heading">
					<h4>Upcoming events</h4>
					<div className="horizontal-bar"></div>
				</div>
				<div className="upcoming-events__cards">
					<div className="event-card">
						<h5 className="event-timestamp">22 Jul</h5>
						<div className="event-headline">Indonesian Jazz Festival 2023</div>
					</div>
					<div className="event-card">
						<h5 className="event-timestamp">22 Jul</h5>
						<div className="event-headline">Indonesian Jazz Festival 2023</div>
					</div>
					<div className="event-card">
						<h5 className="event-timestamp">22 Jul</h5>
						<div className="event-headline">Indonesian Jazz Festival 2023</div>
					</div>
				</div>
				<div className="button-collection">
					<button className="btn">
						<img src="/images/previous_button.png" alt="" />
					</button>
					<button className="btn">
						<img src="/images/next_button.png" alt="" />
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default UpcomingEvents;
