import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PeopleList } from "./component/peoplelist";
import { PeopleDetails } from "./component/peopledetails";
import { PlanetList } from "./component/planetlist";
import { PlanetDetails } from "./component/planetdetails";
import { VehicleList } from "./component/vehiclelist";
import { VehicleDetails } from "./component/vehicledetails";
import { FavoritesContext } from "./component/favoritecontext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [favArray, setFavArray] = useState([]);
	let value = { favArray, setFavArray };
	return (
		<div className="d-flex flex-column">
			<FavoritesContext.Provider value={value}>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<div className="container-flex mt-5">
								<Route exact path="/">
									<Home />
								</Route>
								<Route exact path="/people">
									<PeopleList />
								</Route>
								<Route exact path="/people/:id">
									<PeopleDetails />
								</Route>
								<Route exact path="/planets">
									<PlanetList />
								</Route>
								<Route exact path="/planets/:id">
									<PlanetDetails />
								</Route>
								<Route exact path="/vehicles">
									<VehicleList />
								</Route>
								<Route exact path="/vehicles/:id">
									<VehicleDetails />
								</Route>
								<Route exact path="/demo">
									<Demo />
								</Route>
								<Route exact path="/single/:theid">
									<Single />
								</Route>
							</div>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</FavoritesContext.Provider>
		</div>
	);
};

export default injectContext(Layout);
