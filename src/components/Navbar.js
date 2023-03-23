import { NavLink } from "react-router-dom";
import DefaultNavlinks from "./DefaultNavlinks";
import SocialNavlinks from "./SocialNavlinks";

const Navbar = () => {
	return (
		<nav className="navbar">
			<DefaultNavlinks/>
            <img src="/images/app_logo.png" alt="" />
            <img src="/images/hamburger_menu.png" alt="" />

            {/* <SocialNavlinks/> */}
		</nav>
	);
};

export default Navbar;
