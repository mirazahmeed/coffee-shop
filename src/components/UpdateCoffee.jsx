import React from "react";
import { useLoaderData } from "react-router";

const UpdateCoffee = () => {
	const coffee = useLoaderData();
	const handleUpdateCoffee = (e) => {
		e.preventDefault();
	};
	return (
		<div className="p-2 md:p-24">
			<div>
				<h1 className="text-2xl font-bold">Update Coffee</h1>
				<p>
					Update a coffee to the database. Fill up the form below.
					All fields are required
				</p>
			</div>
			<form onSubmit={handleUpdateCoffee}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Name</label>
						<input
							type="text"
							defaultValue={coffee.name}
							name="name"
							className="input w-full"
							placeholder="Coffee Name"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Barista</label>
						<input
							type="text"
							defaultValue={coffee.barista}
							name="barista"
							className="input w-full"
							placeholder="Enter Coffee Barista"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Supplier</label>
						<input
							type="text"
							defaultValue={coffee.supplier}
							name="supplier"
							className="input w-full"
							placeholder="Enter Coffee Supplier"
						/>
					</fieldset>

					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Taste</label>
						<input
							type="text"
							defaultValue={coffee.taste}
							name="taste"
							className="input w-full"
							placeholder="Enter Coffee Taste"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Category</label>
						<input
							type="text"
							defaultValue={coffee.category}
							name="category"
							className="input w-full"
							placeholder="Enter Coffee Category"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Details</label>
						<input
							type="text"
							defaultValue={coffee.details}
							name="details"
							className="input w-full"
							placeholder="Enter Coffee Details"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Price</label>
						<input
							type="text"
							defaultValue={"$" + coffee.price}
							name="price"
							className="input w-full"
							placeholder="Enter Coffee Details"
						/>
					</fieldset>
				</div>
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-4">
					<label className="label">Image</label>
					<img className="w-24" src={coffee.image} alt="" />
					<input
						type="text"
						defaultValue={coffee.image}
						name="image"
						className="input w-full"
						placeholder="Image URL"
					/>
				</fieldset>
				<input
					type="submit"
					value="Update Coffee"
					className="btn w-full"
				/>
			</form>
		</div>
	);
};

export default UpdateCoffee;
