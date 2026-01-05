// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBhMRQeiw-DPVekvxHiP0LZIkz2DUn51rc",
	authDomain: "coffee-shop-app-1af19.firebaseapp.com",
	projectId: "coffee-shop-app-1af19",
	storageBucket: "coffee-shop-app-1af19.firebasestorage.app",
	messagingSenderId: "1012862211944",
	appId: "1:1012862211944:web:58a5589173b6b5a36ce8dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default app;
export { auth };