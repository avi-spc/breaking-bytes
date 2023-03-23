import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const MobileNavbar = ({ showMobileNavbar }) => {
	const mobileNavbar = useRef();

	return (
		<div className="mobile-nav" ref={mobileNavbar}>
			<img
				src="/images/cancel.png"
				className="mobile-nav-cancel-img"
				alt=""
				onClick={() => showMobileNavbar()}
			/>
			<ul>
				<li>
					<NavLink to="/" className="mobile-nav-links" onClick={() => showMobileNavbar()}>
						stories
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/events"
						className="mobile-nav-links"
						onClick={() => showMobileNavbar()}
					>
						events
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default MobileNavbar;
