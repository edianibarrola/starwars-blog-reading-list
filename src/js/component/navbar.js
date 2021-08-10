import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../component/favoritecontext";

export const Navbar = () => {
	const fav = useContext(FavoritesContext);
	const [showMenu, setShowMenu] = useState("");

	return (
		<nav className="navbar navbar-light bg-light fixed-top mb-5">
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
				<div className="btn-group">
					<Link to="/">
						<button type="button" className="btn btn-warning">
							Home
						</button>
					</Link>

					<button
						onClick={() => (showMenu == "" ? setShowMenu("show") : setShowMenu(""))}
						type="button"
						className="btn btn-warning dropdown-toggle dropdown-toggle-split"
						dataToggle="dropdown"
						ariaHaspopup="true"
						ariaExpanded="false">
						<span className="sr-only">Toggle Dropdown</span>
					</button>
					<div className={"dropdown-menu " + showMenu}>
						{fav.favArray.map((f, i) => {
							return <li key={i}>{f}</li>;
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};
