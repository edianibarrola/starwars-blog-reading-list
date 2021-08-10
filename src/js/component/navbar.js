import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light fixed-top mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						style={{ width: "100px", border: "none" }}
						src="https://res.cloudinary.com/petrep/image/upload/v1628616568/starwars/whitelogo.png"
						alt=""
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
