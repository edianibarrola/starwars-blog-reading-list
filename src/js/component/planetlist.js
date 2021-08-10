import React, { Link } from "react";
import { useState, useEffect } from "react";

export const PlanetList = () => {
	const api = "https://www.swapi.tech/api";
	const [planetArr, setPlanetArr] = useState([]);
	useEffect(() => {
		fetch(`${api}/planets`)
			.then(res => res.json())
			.then(data => setPlanetArr(data.results));
	}, []);
	return (
		<div className="row  list-row flex-row flex-nowrap" style={{ overflowY: "hidden", overflowX: "auto" }}>
			{planetArr ? (
				planetArr.map((planet, i) => {
					return (
						<div key={i} className="col-3 ">
							<div className="card">
								<img src="https://via.placeholder.com/150x150/000000/FFFFFF/?text=Planet" alt="" />
								<a href={"/planets/" + planet.uid}>
									<p className="card-name">{planet.name}</p>
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
