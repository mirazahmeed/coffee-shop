import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
	const initialUsers = useLoaderData();
	const [users, setUsers] = useState(initialUsers);

	const handleDeleteUser = (id) => {
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

                

				// Swal.fire("Deleted!", "Your file has been deleted.", "success");
			}
		});
	};

	return (
		<div>
			<h1>Users</h1>
			<div>
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th> No</th>
								<th>Name</th>
								<th>Phone</th>
								<th>Address</th>
								<th></th>
							</tr>
						</thead>
						{users.map((user, index) => (
							<tbody>
								<tr key={user._id}>
									<th>{index + 1}</th>
									<td>
										<div className="flex items-center gap-3">
											<div className="avatar">
												<div className="mask mask-squircle h-12 w-12">
													<img
														src={user.photo}
														alt="Avatar Tailwind CSS Component"
													/>
												</div>
											</div>
											<div>
												<div className="font-bold">
													{user.name}
												</div>
												<div className="text-sm opacity-50">
													{user.address}
												</div>
											</div>
										</div>
									</td>
									<td>{user.phone}</td>
									<td>{user.address}</td>
									<th className="flex gap-2">
										<button
											className="btn btn-ghost btn-xs"
											onClick={() =>
												handleDeleteUser(user._id)
											}>
											Details
										</button>
										<button className="btn btn-ghost btn-xs">
											Edit
										</button>
										<button className="btn btn-ghost btn-xs">
											Delete
										</button>
									</th>
								</tr>
							</tbody>
						))}
					</table>
				</div>
			</div>
		</div>
	);
};

export default Users;
