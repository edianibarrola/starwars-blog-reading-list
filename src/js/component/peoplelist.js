import React, { Link } from "react";
import { useState, useEffect, useContext } from "react";
import { FavoritesContext } from "./favoritecontext";

export const PeopleList = () => {
	const api = "https://www.swapi.tech/api";
	const [pplArr, setPplArr] = useState([]);
	const fav = useContext(FavoritesContext);
	useEffect(() => {
		fetch(`${api}/people`)
			.then(res => res.json())
			.then(data => setPplArr(data.results));
	}, []);
	return (
		<div className="row  list-row flex-row flex-nowrap" style={{ overflowY: "hidden", overflowX: "auto" }}>
			{pplArr ? (
				pplArr.map((person, i) => {
					return (
						<div key={i} className="col-3 ">
							<div className="card">
								<img
									className="list-img"
									src="https://via.placeholder.com/150x150/000000/FFFFFF/?text=People"
									alt=""
								/>
								<a href={"/people/" + person.uid}>
									<p className="card-name">{person.name}</p>
									<p className="card-desc">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis
										nec dui at dictum. Sed mattis enim a nisl hendrerit iaculis. Pellentesque vel
										aliquet massa.
									</p>
								</a>
								<div className="col-12">
									<button
										style={{ background: "none", border: "none" }}
										onClick={() => {
											if (!fav.favArray.includes(person.name)) {
												fav.setFavArray([...fav.favArray, person.name]);
											} else if (fav.favArray.includes(person.name)) {
												fav.setFavArray(fav.favArray.filter(item => item !== person.name));
											}
										}}>
										{fav.favArray.includes(person.name) ? (
											<i className="far fa-trash-alt" />
										) : (
											<i className="far fa-heart" />
										)}
									</button>
								</div>
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
