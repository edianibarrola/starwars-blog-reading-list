import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { PeopleList } from "../component/peoplelist";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Star Wars</h1>
		<div className="row d-flex-inline justify-content-around">
			<PeopleList />
		</div>
	</div>
);
