import { NavLink } from "react-router-dom";

const DefaultNavlinks = () => {
	return (
		<div className="default-nav-links">
			<NavLink to="/">
				stories
			</NavLink>
            <NavLink to="/events">
				events
			</NavLink>
		</div>
	);
};

export default DefaultNavlinks;
