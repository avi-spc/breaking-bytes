import { NavLink } from 'react-router-dom';

const SecondaryNavbar = () => {
	return (
		<div className="navbar-secondary">
			<NavLink to="/" className="btn btn--secondary">
				<img src="/images/home.png" alt="" />
			</NavLink>
			<NavLink to="/favorites" className="btn btn--secondary">
				<img src="/images/favorite.png" alt="" />
			</NavLink>
		</div>
	);
};

export default SecondaryNavbar;
