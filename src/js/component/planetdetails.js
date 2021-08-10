import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PlanetDetails = () => {
	const api = "https://www.swapi.tech/api";
	const [planetInfo, setplanetInfo] = useState([]);
	let { id } = useParams();
	useEffect(() => {
		fetch(`${api}/planets/${id}`)
			.then(res => res.json())
			.then(data => {
				setplanetInfo(data.result.properties);
			}),
			[planetInfo];
	});
	return (
		<div className="container " style={{ "margin-top": "9vh" }}>
			<div className="card card-desc">
				<div className="row d-flex-inline">
					<div className="col-4">
						<img
							src="https://via.placeholder.com/150x150/000000/FFFFFF/?text=Planets"
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
				<div className="row d-flex ">
					<div className="col">
						<div className="col card-desc">Name: </div>
						<div className="col card-desc">
							{planetInfo ? <p>{planetInfo.name}</p> : <h1> ...loading </h1>}
						</div>
					</div>

					<div className="col">
						<div className="col card-desc">Population: </div>

						<div className="col card-desc">
							{planetInfo ? <p>{planetInfo.population}</p> : <h1> ...loading </h1>}
						</div>
					</div>
					<div className="col">
						<div className="col card-desc">Climate: </div>
						<div className="col card-desc">
							{planetInfo ? <p>{planetInfo.climate}</p> : <h1> ...loading </h1>}
						</div>
					</div>

					<div className="col">
						<div className="col card-desc">Terrain: </div>
						<div className="col card-desc">
							{planetInfo ? <p>{planetInfo.terrain}</p> : <h1> ...loading </h1>}
						</div>
					</div>

					<div className="col">
						<div className="col card-desc">Rotation Period: </div>
						<div className="col card-desc">
							{planetInfo ? <p>{planetInfo.rotation_period}</p> : <h1> ...loading </h1>}
						</div>
					</div>

					<div className="col">
						<div className="col card-desc">Orbital Period: </div>
						<div className="col card-desc">
							{planetInfo ? <p>{planetInfo.orbital_period}</p> : <h1> ...loading </h1>}
						</div>
					</div>

					<div className="col">
						<div className="col card-desc">Gravity: </div>
						<div className="col card-desc">
							{planetInfo ? <p>{planetInfo.gravity}</p> : <h1> ...loading </h1>}
						</div>
					</div>
					<div className="col">
						<div className="col card-desc">Diameter: </div>
						<div className="col card-desc">
							{planetInfo ? <p>{planetInfo.diameter}</p> : <h1> ...loading </h1>}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
