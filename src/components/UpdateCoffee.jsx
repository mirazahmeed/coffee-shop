import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
	const {
		name,
		barista,
		supplier,
		taste,
		category,
		details,
		price,
		image,
		_id,
	} = useLoaderData();
	const handleUpdateCoffee = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const updatedCoffee = Object.fromEntries(formData.entries());
		fetch(`https://server-coffee-shop-pi.vercel.app/coffees/${_id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Coffee Updated Successfully",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};
	return (
		<div className="p-2 md:p-24">
			<div>
				<h1 className="text-2xl font-bold">Update Coffee</h1>
				<p>
					Update a coffee to the database. Fill up the form below. All
					fields are required
				</p>
			</div>
			<form onSubmit={handleUpdateCoffee}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Name</label>
						<input
							type="text"
							defaultValue={name}
							name="name"
							className="input w-full"
							placeholder="Coffee Name"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Barista</label>
						<input
							type="text"
							defaultValue={barista}
							name="barista"
							className="input w-full"
							placeholder="Enter Coffee Barista"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Supplier</label>
						<input
							type="text"
							defaultValue={supplier}
							name="supplier"
							className="input w-full"
							placeholder="Enter Coffee Supplier"
						/>
					</fieldset>

					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Taste</label>
						<input
							type="text"
							defaultValue={taste}
							name="taste"
							className="input w-full"
							placeholder="Enter Coffee Taste"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Category</label>
						<input
							type="text"
							defaultValue={category}
							name="category"
							className="input w-full"
							placeholder="Enter Coffee Category"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Details</label>
						<input
							type="text"
							defaultValue={details}
							name="details"
							className="input w-full"
							placeholder="Enter Coffee Details"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
						<label className="label">Price</label>
						<input
							type="text"
							defaultValue={price}
							name="price"
							className="input w-full"
							placeholder="Enter Coffee Details"
						/>
					</fieldset>
				</div>
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-4">
					<label className="label">Image</label>
					<img className="w-24" src={image} alt="" />
					<input
						type="text"
						defaultValue={image}
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
