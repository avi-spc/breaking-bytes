import { NavLink } from 'react-router-dom';

const Events = () => {
	return (
		<div className="events-section">
			<div className="events-about">
				<h2>Why is BBCon everyone’s favorite?</h2>
				<div className="events-about__content">
					Opinions are not just expressed, but elevated to the level of insightful and
					thought-provoking analyses that shape the very fabric of the artistic world.
				</div>
			</div>
			<div className="separator-heading">
				<h4>Recent event</h4>
				<div className="horizontal-bar"></div>
			</div>
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
					<div className="recent-event__join-btn">Explore</div>
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
			<div className="speakers-accolades">
				<h3 className="speakers-accolades__heading">What Speakers Say?</h3>
				<img className="speaker-image" src="/images/speaker.png" alt="" />
				<div className="speaker-quote">
					I was really impressed with the level of organization and the quality of content
					presented at the Breaking Bytes event. It's clear that the news organization
					behind it is committed to delivering insightful and informative coverage of the
					latest developments in the tech industry.
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
			<div className="partners">
				<div className="separator-heading">
					<h4>Thanks to our partners</h4>
					<div className="horizontal-bar"></div>
				</div>
				<div className="partners__logos">
					<img className="speaker-image" src="/images/partner-1.png" alt="" />
					<img className="speaker-image" src="/images/partner-2.png" alt="" />
					<img className="speaker-image" src="/images/partner-3.png" alt="" />
					<img className="speaker-image" src="/images/partner-4.png" alt="" />
				</div>
			</div>
			<h2 className="ready-msg">
				Be ready for
				<br />
				South Asia’s largest news media forum.
			</h2>
			<footer>
				<div className="quick-links">
					<h4>Quick Links</h4>
					<div className="links">
						<NavLink>Stories</NavLink>
						<NavLink>Events</NavLink>
						<NavLink>Favorites</NavLink>
					</div>
				</div>
				<div className="newsletter">
					<h4>Sign up to get all updates</h4>
					<form action="" className="newsletter__form">
						<input type="text" />
						<button className="btn">
							<img src="/images/next_button.png" alt="" />
						</button>
					</form>
				</div>
				<div className="copyright">Copyright &copy; 2023 | Breaking Bytes</div>
				<div className="social-links">
					<NavLink>
						<img src="/images/instagram.png" alt="" />
					</NavLink>
					<NavLink>
						<img src="/images/youtube.png" alt="" />
					</NavLink>
					<NavLink>
						<img src="/images/twitter.png" alt="" />
					</NavLink>
				</div>
			</footer>
		</div>
	);
};

export default Events;
