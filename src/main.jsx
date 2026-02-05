import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import Home from "./components/Home.jsx";
import MainLayout from "./assets/layouts/MainLayout.jsx";
import CoffeeDetail from "./components/CoffeeDetail.jsx";
import signIn from "./components/signIn.jsx";
import singUp from "./components/singUp.jsx";
import AuthProvider from "./Contexts/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		children: [
			{
				index: true,
				loader: () =>
					fetch("https://server-coffee-shop-pi.vercel.app/coffees"),
				Component: Home,
			},
			{
				path: "add-coffee",
				Component: AddCoffee,
			},
			{
				path: "coffee/:id",
				loader: ({ params }) =>
					fetch(
						`https://server-coffee-shop-pi.vercel.app/coffees/${params.id}`,
					),
				Component: CoffeeDetail,
			},
			{
				path: "updateCoffee/:id",
				loader: ({ params }) =>
					fetch(
						`https://server-coffee-shop-pi.vercel.app/coffees/${params.id}`,
					),
				Component: UpdateCoffee,
			},
			{
				path: "sign-in",
				Component: signIn,
			},
			{
				path: "sign-up",
				Component: singUp,
			},
			{
				path: "users",
				loader: () =>
					fetch("https://server-coffee-shop-pi.vercel.app/users/"),
				Component: Users,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</StrictMode>,
);
