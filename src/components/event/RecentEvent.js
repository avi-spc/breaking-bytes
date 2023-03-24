import { Fragment } from 'react';

const RecentEvent = () => {
	return (
		<Fragment>
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
		</Fragment>
	);
};

export default RecentEvent;
