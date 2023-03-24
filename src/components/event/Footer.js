import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Newsletter from './Newsletter';

const Footer = () => {
	return (
		<Fragment>
			<footer>
				<div className="quick-links">
					<h4>Quick Links</h4>
					<div className="links">
						<NavLink>Stories</NavLink>
						<NavLink>Events</NavLink>
						<NavLink>Favorites</NavLink>
					</div>
				</div>
				<Newsletter />
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
		</Fragment>
	);
};

export default Footer;
