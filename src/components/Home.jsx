import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCards from "./CoffeeCards";

const Home = () => {
	const initialCoffees = useLoaderData();
	const [coffees, setCoffees] = useState(initialCoffees);

	const handleSearch = (e) => {
		e.preventDefault();
		const search = e.target.search.value;
		const filteredCoffees = initialCoffees.filter((coffee) =>
			coffee.name.toLowerCase().includes(search.toLowerCase()),
		);
		setCoffees(filteredCoffees);
		e.target.reset();
	};
	return (
		<div>
			<form onSubmit={handleSearch}>
				<input type="text" name="search" />
				<button type="submit">Search</button>
			</form>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{coffees.map((coffee) => (
					<CoffeeCards
						key={coffee._id}
						coffees={coffees}
						setCoffees={setCoffees}
						coffee={coffee}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
