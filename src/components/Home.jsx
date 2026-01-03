import React from "react";
import { useLoaderData } from "react-router";
import CoffeeCards from "./CoffeeCards";

const Home = () => {
	const coffees = useLoaderData();
	console.log(coffees);
	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{coffees.map((coffee) => (
					<CoffeeCards key={coffee._id} coffee={coffee} />
				))}
			</div>
		</div>
	);
};

export default Home;
