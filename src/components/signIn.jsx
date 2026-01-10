import React, { use } from "react";
import AuthContext from "../Contexts/AuthContext";

const signIn = () => {
	const { signInUser } = use(AuthContext);

	const handleSignIn = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const email = formData.get("email");
		const password = formData.get("password");
		signInUser(email, password)
			.then((userCredential) => {
				// Signed up
				const user = userCredential.user;
				console.log(user);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};
	return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Login now !</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
					</div>
					<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
						<div className="card-body">
							<form onSubmit={handleSignIn} className="fieldset">
								<label className="label">Email</label>
								<input
									type="email"
									name="email"
									className="input"
									placeholder="Email"
								/>
								<label className="label">Password</label>
								<input
									type="password"
									name="password"
									className="input"
									placeholder="Password"
								/>
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

export default signIn;
