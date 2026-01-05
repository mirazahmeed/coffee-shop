import React from "react";
import AuthContext from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({ children }) => {
	const createUser = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};
	const userInfo = {
		createUser,
	};
	return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
