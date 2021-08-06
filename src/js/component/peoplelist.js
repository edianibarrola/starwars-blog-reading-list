import React, { Link } from "react";
import { useState, useEffect } from "react";

export const PeopleList = () => {
	const api = "https://www.swapi.tech/api";
	const [pplArr, setPplArr] = useState([]);
	useEffect(() => {
		fetch(`${api}/people`)
			.then(res => res.json())
			.then(data => setPplArr(data.results));
	}, []);
	return (
		<div className="row   flex-row flex-nowrap" style={{ overflowY: "hidden", overflowX: "auto" }}>
			{pplArr ? (
				pplArr.map((person, i) => {
					return (
						<div key={i} className="col-3 ">
							<a href={"/people/" + person.uid}>
								<div className="card">
									<img
										src="https://via.placeholder.com/150x150/000000/FFFFFF/?text=StarWars"
										alt=""
									/>
									<p>{person.name}</p>
								</div>
							</a>
						</div>
					);
				})
			) : (
				<h1>...Loading</h1>
			)}
		</div>
	);
};
