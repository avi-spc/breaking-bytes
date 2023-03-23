import { NavLink } from 'react-router-dom';

const SocialNavlinks = () => {
	return (
		<div className="social-nav-links">
			<NavLink to="">
				<img src="/images/instagram.png" alt="" />
			</NavLink>
			<NavLink to="">
				<img src="/images/youtube.png" alt="" />
			</NavLink>
			<NavLink to="">
				<img src="/images/twitter.png" alt="" />
			</NavLink>
		</div>
	);
};

export default SocialNavlinks;
