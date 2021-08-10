import React, { Link } from "react";
import { useState, useEffect } from "react";

export const VehicleList = () => {
	const api = "https://www.swapi.tech/api";
	const [vehicleArr, setVehicleArr] = useState([]);
	useEffect(() => {
		fetch(`${api}/vehicles`)
			.then(res => res.json())
			.then(data => setVehicleArr(data.results));
	}, []);
	return (
		<div className="row  list-row flex-row flex-nowrap" style={{ overflowY: "hidden", overflowX: "auto" }}>
			{vehicleArr ? (
				vehicleArr.map((vehicle, i) => {
					return (
						<div key={i} className="col-3 ">
							<div className="card">
								<img
									className="list-img"
									src="https://via.placeholder.com/150x150/000000/FFFFFF/?text=Vehicles"
									alt=""
								/>
								<a href={"/vehicles/" + vehicle.uid}>
									<p className="card-name">{vehicle.name}</p>
									<p className="card-desc">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis
										nec dui at dictum. Sed mattis enim a nisl hendrerit iaculis. Pellentesque vel
										aliquet massa.
									</p>
								</a>
							</div>
						</div>
					);
				})
			) : (
				<h1>...Loading</h1>
			)}
		</div>
	);
};
