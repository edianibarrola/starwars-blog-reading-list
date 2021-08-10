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
		<div className="container">
			<div className="card card-desc">
				<div className="row d-flex-inline">
					<div className="col">
						<img
							src="https://via.placeholder.com/150x150/000000/FFFFFF/?text=Planets"
							alt=""
							style={{ width: "400px", imageFit: "contain" }}
						/>
					</div>
					<div className="col">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis nec dui at
							dictum. Sed mattis enim a nisl hendrerit iaculis. Pellentesque vel aliquet massa.
						</p>
					</div>
					<span className="card-desc">
						<div className="col">Name: </div>
						<div className="col">{planetInfo ? <p>{planetInfo.name}</p> : <h1> ...loading </h1>}</div>
						<div className="col">Population: </div>

						<div className="col">{planetInfo ? <p>{planetInfo.population}</p> : <h1> ...loading </h1>}</div>
						<div className="col">Climate: </div>
						<div className="col">{planetInfo ? <p>{planetInfo.climate}</p> : <h1> ...loading </h1>}</div>
						<div className="col">Terrain: </div>
						<div className="col">{planetInfo ? <p>{planetInfo.terrain}</p> : <h1> ...loading </h1>}</div>
						<div className="col">Rotation Period: </div>
						<div className="col">
							{planetInfo ? <p>{planetInfo.rotation_period}</p> : <h1> ...loading </h1>}
						</div>
						<div className="col">Orbital Period: </div>
						<div className="col">
							{planetInfo ? <p>{planetInfo.orbital_period}</p> : <h1> ...loading </h1>}
						</div>
						<div className="col">Gravity: </div>
						<div className="col">{planetInfo ? <p>{planetInfo.gravity}</p> : <h1> ...loading </h1>}</div>
						<div className="col">Diameter: </div>
						<div className="col">{planetInfo ? <p>{planetInfo.diameter}</p> : <h1> ...loading </h1>}</div>
					</span>
				</div>
			</div>
		</div>
	);
};
