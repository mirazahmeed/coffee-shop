import React, { use } from "react";
import { useLoaderData } from "react-router";

const CoffeeDetail = () => {
	const coffee = useLoaderData();
	return (
		<div>
			<h2>{coffee.name}</h2>
			<p>{coffee.description}</p>
			<p>{coffee.price}</p>
			<p>{coffee.barista}</p>
		</div>
	);
};

export default CoffeeDetail;
