import React, { use } from "react";
import AuthContext from "../Contexts/AuthContext";

const singUp = () => {
	const { createUser } = use(AuthContext);

	const handleSignUp = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const email = formData.get("email");
		const password = formData.get("password");
		createUser(email, password)
			.then((userCredential) => {
				// Signed up
				const user = userCredential.user;
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};
	return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Sign Up now!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
					</div>
					<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
						<div className="card-body">
							<form onSubmit={handleSignUp} className="fieldset">
								<label className="label">Name</label>
								<input
									type="name"
									className="input"
									placeholder="Name"
									name="name"
									defaultValue="miraz"
								/>
								<label className="label">Phone</label>
								<input
									type="phone"
									className="input"
									placeholder="Phone"
									name="phone"
									defaultValue="0123456789"
								/>
								<label className="label">Photo URL</label>
								<input
									type="photo"
									className="input"
									placeholder="Photo URL"
									name="photo"
									defaultValue="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								/>
								<label className="label">Address</label>
								<input
									type="address"
									className="input"
									placeholder="Address"
									name="address"
									defaultValue="554, Shahchhino Ara, JP"
								/>
								<label className="label">Email</label>
								<input
									type="email"
									className="input"
									placeholder="Email"
									name="email"
									defaultValue="miraz07ahmed@gmail.com"
								/>
								<label className="label">Password</label>
								<input
									type="password"
									className="input validator"
									required
									placeholder="Password"
									minLength="8"
									pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
									title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
									defaultValue="Mm12345678*#"
								/>
								<p className="validator-hint">
									Must be more than 8 characters, including
									<br />
									At least one number
									<br />
									At least one lowercase letter
									<br />
									At least one uppercase letter
								</p>
								<div>
									<a className="link link-hover">
										Forgot password?
									</a>
								</div>
								<button className="btn btn-neutral mt-4">
									Login
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default singUp;
