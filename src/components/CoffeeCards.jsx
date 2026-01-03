import React from "react";
import Swal from "sweetalert2";

const CoffeeCards = ({ coffee }) => {
	const { name, image, price, barista } = coffee;

	const handleDelete = (_id) => {
		console.log(_id);

		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: "Deleted!",
					text: "Your file has been deleted.",
					icon: "success",
				});
			}
		});
	};
	return (
		<div>
			<div className=" flex shadow-sm hover:shadow-md transition-all duration-300 bg-orange-200 hover:bg-orange-300 items-center">
				<figure className="w-5/12 h-64">
					<img
						className="w-full h-64 object-cover"
						src={image}
						alt={name}
					/>
				</figure>
				<div className="p-4 w-7/12 flex flex-col items-center justify-center space-y-2">
					<h2 className="text-md font-bold">
						Name : <span className="text-md font-bold">{name}</span>
					</h2>
					<p className="text-md font-bold">
						Price :{" "}
						<span className="text-md font-bold">${price}</span>
					</p>
					<p className="text-md font-bold">
						Barista :{" "}
						<span className="text-md font-bold">{barista}</span>
					</p>
				</div>
				<div className="join join-vertical">
					<button className="btn join-item">View</button>
					<button className="btn join-item">Update</button>
					<button
						onClick={() => handleDelete(coffee._id)}
						className="btn join-item">
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default CoffeeCards;
