import React from "react";

const AddCoffee = ({ coffees, setCoffees }) => {
	const handleAddCoffee = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const newCoffee = Object.fromEntries(formData.entries());
		console.log(newCoffee);

		fetch("http://localhost:3000/coffees", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("after adding data to db", data);
			});
			setCoffees([...coffees, newCoffee]);
		// .catch((err) => console.log(err));
	};

	return (
		<div className="p-2 md:p-24">
			<div>
				<h1 className="text-2xl font-bold">Add Coffee</h1>
				<p>
					Add a new coffee to the database. Fill up the form below.
					All fields are required
				</p>
			</div>
			<form onSubmit={handleAddCoffee}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Name</label>
						<input
							type="text"
							defaultValue="Midnight Roast"
							name="name"
							className="input w-full"
							placeholder="Coffee Name"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Barista</label>
						<input
							type="text"
							defaultValue="Sophia Bennett"
							name="barista"
							className="input w-full"
							placeholder="Enter Coffee Barista"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Supplier</label>
						<input
							type="text"
							defaultValue="RoastCraft Co."
							name="supplier"
							className="input w-full"
							placeholder="Enter Coffee Supplier"
						/>
					</fieldset>

					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Taste</label>
						<input
							type="text"
							defaultValue="Bold, smoky, and intense with caramel undertones"
							name="taste"
							className="input w-full"
							placeholder="Enter Coffee Taste"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Category</label>
						<input
							type="text"
							defaultValue="Dark Roast"
							name="category"
							className="input w-full"
							placeholder="Enter Coffee Category"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Details</label>
						<input
							type="text"
							defaultValue="Bold, smoky, and intense with caramel undertones"
							name="details"
							className="input w-full"
							placeholder="Enter Coffee Details"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Price</label>
						<input
							type="text"
							defaultValue="Bold, smoky, and intense with caramel undertones"
							name="price"
							className="input w-full"
							placeholder="Enter Coffee Details"
						/>
					</fieldset>
				</div>
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-4">
					<label className="label">Image</label>
					<input
						type="text"
						defaultValue="https://images.unsplash.com/photo-1523942839745-7848d5cfe24c"
						name="image"
						className="input w-full"
						placeholder="Image URL"
					/>
				</fieldset>
				<input
					type="submit"
					value="Add Coffee"
					className="btn w-full"
				/>
			</form>
		</div>
	);
};

export default AddCoffee;
