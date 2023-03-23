import { NavLink } from 'react-router-dom';

const MobileNavbar = ({ showMobileNavbar }) => {
	return (
		<div className="mobile-nav">
			<img
				src="/images/cancel.png"
				className="mobile-nav__cancel-img"
				alt=""
				onClick={() => showMobileNavbar()}
			/>
			<NavLink to="/" className="mobile-nav__link" onClick={() => showMobileNavbar()}>
				stories
			</NavLink>
			<NavLink to="/events" className="mobile-nav-link" onClick={() => showMobileNavbar()}>
				events
			</NavLink>
			<NavLink to="/favorites" className="mobile-nav-link" onClick={() => showMobileNavbar()}>
				favorites
			</NavLink>
		</div>
	);
};

export default MobileNavbar;
