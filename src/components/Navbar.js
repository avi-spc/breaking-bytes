import { NavLink } from "react-router-dom";
import DefaultNavlinks from "./DefaultNavlinks";
import SocialNavlinks from "./SocialNavlinks";

const Navbar = () => {
	return (
		<nav className="navbar">
			<DefaultNavlinks/>
            <img src="" alt="" />
            <SocialNavlinks/>
		</nav>
	);
};

export default Navbar;
