import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PeopleDetails = () => {
	const api = "https://www.swapi.tech/api";
	const [personInfo, setPersonInfo] = useState([]);
	let { id } = useParams();
	useEffect(() => {
		fetch(`${api}/people/${id}`)
			.then(res => res.json())
			.then(data => {
				setPersonInfo(data.result.properties);
			}),
			[personInfo];
	});
	return (
		<div className="container">
			<div className="card">
				<div className="row d-flex-inline">
					<div className="col">
						<img
							src="https://via.placeholder.com/150x150/000000/FFFFFF/?text=StarWars"
							alt=""
							style={{ width: "400px", imageFit: "contain" }}
						/>
					</div>

					<div className="col">Name: </div>
					<div className="col">{personInfo ? <p>{personInfo.name}</p> : <h1> ...loading </h1>}</div>
					<div className="col">Height: </div>

					<div className="col">{personInfo ? <p>{personInfo.height}</p> : <h1> ...loading </h1>}</div>
					<div className="col">Mass: </div>
					<div className="col">{personInfo ? <p>{personInfo.mass}</p> : <h1> ...loading </h1>}</div>
					<div className="col">Hair Color: </div>
					<div className="col">{personInfo ? <p>{personInfo.hair_color}</p> : <h1> ...loading </h1>}</div>
					<div className="col">Skin Color: </div>
					<div className="col">{personInfo ? <p>{personInfo.skin_color}</p> : <h1> ...loading </h1>}</div>
					<div className="col">Eye Color: </div>
					<div className="col">{personInfo ? <p>{personInfo.eye_color}</p> : <h1> ...loading </h1>}</div>
					<div className="col">Birth Year: </div>
					<div className="col">{personInfo ? <p>{personInfo.birth_year}</p> : <h1> ...loading </h1>}</div>
					<div className="col">Gender: </div>
					<div className="col">{personInfo ? <p>{personInfo.gender}</p> : <h1> ...loading </h1>}</div>
				</div>
			</div>
		</div>
	);
};
