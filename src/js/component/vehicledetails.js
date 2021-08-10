import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const VehicleDetails = () => {
	const api = "https://www.swapi.tech/api";
	const [vehicleInfo, setVehicleInfo] = useState([]);
	let { id } = useParams();
	useEffect(() => {
		fetch(`${api}/vehicles/${id}`)
			.then(res => res.json())
			.then(data => {
				setVehicleInfo(data.result.properties);
			}),
			[vehicleInfo];
	});
	return (
		<div className="container " style={{ "margin-top": "9vh" }}>
			<div className="card card-desc">
				<div className="row d-flex-inline ">
					<div className="col-12">
						<h1 className="text-center">{vehicleInfo.name}</h1>
					</div>
					<div className="col-4">
						<img
							src="https://via.placeholder.com/150x150/000000/FFFFFF/?text=Vehicles"
							alt=""
							style={{ width: "300px", imageFit: "contain" }}
						/>
					</div>
					<div className="col-8 card-desc">
						<p className="text-center" style={{ "font-size": "15px" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis nec dui at
							dictum. Sed mattis enim a nisl hendrerit iaculis. Pellentesque vel aliquet massa.
						</p>
					</div>
				</div>
				<div className="row d-flex m-2">
					<div className="col br">
						<div className="col card-desc">Model: </div>

						<div className="col card-desc">
							{vehicleInfo ? <p className="rt">{vehicleInfo.model}</p> : <h1> ...loading </h1>}
						</div>
					</div>
					<div className="col br">
						<div className="col card-desc">Manufacturer: </div>
						<div className="col card-desc">
							{vehicleInfo ? <p className="rt">{vehicleInfo.manufacturer}</p> : <h1> ...loading </h1>}
						</div>
					</div>

					<div className="col br">
						<div className="col card-desc">Length: </div>
						<div className="col card-desc">
							{vehicleInfo ? <p className="rt">{vehicleInfo.length}</p> : <h1> ...loading </h1>}
						</div>
					</div>

					<div className="col br">
						<div className="col card-desc">Crew: </div>
						<div className="col card-desc">
							{vehicleInfo ? <p className="rt">{vehicleInfo.crew}</p> : <h1> ...loading </h1>}
						</div>
					</div>

					<div className="col br">
						<div className="col card-desc">Passengers: </div>
						<div className="col card-desc">
							{vehicleInfo ? <p className="rt">{vehicleInfo.passengers}</p> : <h1> ...loading </h1>}
						</div>
					</div>

					<div className="col br">
						<div className="col card-desc">Max Speed: </div>
						<div className="col card-desc">
							{vehicleInfo ? (
								<p className="rt">{vehicleInfo.max_atmosphering_speed}</p>
							) : (
								<h1> ...loading </h1>
							)}
						</div>
					</div>
					<div className="col ">
						<div className="col card-desc">Cost in credits: </div>
						<div className="col card-desc">
							{vehicleInfo ? <p className="rt">{vehicleInfo.cost_in_credits}</p> : <h1> ...loading </h1>}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
