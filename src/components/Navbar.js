import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import DefaultNavlinks from './DefaultNavlinks';
import SocialNavlinks from './SocialNavlinks';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
	const [visibility, setVisibility] = useState(false);

	const showMobileNavbar = () => {
		setVisibility(!visibility);
	};

	return (
		<nav className="navbar">
			<DefaultNavlinks />
			<img src="/images/app_logo.png" alt="" className="app_logo" />
			<img
				src="/images/hamburger_menu.png"
				className="hamburger_icon"
				alt=""
				onClick={() => showMobileNavbar()}
			/>
			{visibility && <MobileNavbar showMobileNavbar={showMobileNavbar} />}

			{/* <SocialNavlinks/> */}
		</nav>
	);
};

export default Navbar;
