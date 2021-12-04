import React from "react";
import ProductList from "./components/ProductsList";
import logo from "./vitl-logo.png";
import "./App.css";
import { AppProvider } from "./store";
import Basket from "./components/Basket";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<nav className="App-nav">
					<img src={logo} className="App-logo" alt="vitl" />
				</nav>
			</header>
			<AppProvider>
				<section className="App-body">
					<Basket />
				</section>
				<section className="App-body">
					<ProductList />
				</section>
			</AppProvider>

			<footer></footer>
		</div>
	);
}

export default App;
