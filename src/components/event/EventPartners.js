import { Fragment } from 'react';

const EventPartners = () => {
	return (
		<Fragment>
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
		</Fragment>
	);
};

export default EventPartners;
