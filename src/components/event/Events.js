const Events = () => {
	return (
		<div className="events-section">
			<div className="recent-event">
				<h1 className="recent-event__heading">Dissecting the #MeToo Tsunami</h1>
				<div className="recent-event__details">
					<div className="recent-event__stamp-card">
						<img src="/images/recent_ticket.png" alt="" />
					</div>
					<div className="recent-event__synopsis">
						Was the Indian media responsible in its coverage or did it sacrifice the
						credibility of the movement at the cost of speed and sensationalism?
					</div>
					<div className="recent-event__join-btn">Join</div>
				</div>
			</div>
			<div className="recent-event__impact-data">
				<div className="recent-event__data">
					<h3 className="percentage">
						83<sup>%</sup>
					</h3>
					<div className="impact">Said event exceeded their expectations</div>
				</div>
				<div className="recent-event__data">
					<h3 className="percentage">
						95<sup>%</sup>
					</h3>
					<div className="impact">Said they will attend the next event</div>
				</div>
			</div>

			<div className="upcoming-events">
				<div className="upcoming-events__heading">
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
				<div className="speakers-accolades">
					<h3 className="speakers-accolades__heading">What Speakers Say?</h3>
					<div className="speaker-image"></div>
					<div className="speaker-quote">
						Was the Indian media responsible in its coverage or did it sacrifice the
						credibility of the movement at the cost of speed and sensationalism?
					</div>
					<div className="button-collection next-previous">
						<button className="btn">
							<img src="/images/previous_button.png" alt="" />
						</button>
						<button className="btn">
							<img src="/images/next_button.png" alt="" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
