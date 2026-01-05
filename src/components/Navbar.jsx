import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
	return (
		<div className="h-16">
			<h1>
				<ul className="flex gap-4">
					<NavLink className="border border-base-300 p-2" to="/">Home</NavLink>
					<NavLink className="border border-base-300 p-2" to="/add-coffee">Add Coffee</NavLink>
					<NavLink className="border border-base-300 p-2" to="/sign-in">Sign In</NavLink>
					<NavLink className="border border-base-300 p-2" to="/sign-up">Sign Up</NavLink>
				</ul>
			</h1>
		</div>
	);
};

export default Navbar;
