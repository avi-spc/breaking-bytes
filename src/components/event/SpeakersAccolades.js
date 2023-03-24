import { Fragment } from 'react';

const SpeakersAccolades = () => {
	return (
		<Fragment>
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
		</Fragment>
	);
};

export default SpeakersAccolades;
