import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { PeopleList } from "../component/peoplelist";
import { PlanetList } from "../component/planetlist";
import { VehicleList } from "../component/vehiclelist";
export const Home = () => (
	<div className="text-center d-flex justify-content-center " style={{ "margin-top": "100px" }}>
		<div className=" container-flex w-75">
			<h1 className="grey-title">DATABANK</h1>
			<div className="row mb-3 d-flex-inline justify-content-around">
				<PeopleList />
			</div>
			<div className="row mb-3 d-flex-inline justify-content-around">
				<PlanetList />
			</div>
			<div className="row mb-3 d-flex-inline justify-content-around">
				<VehicleList />
			</div>
		</div>
	</div>
);
