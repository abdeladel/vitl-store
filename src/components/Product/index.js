import React from "react";
import { CURRENCIES } from "../../constants";
import "./styles.css";

const Product = ({ product, currency, updateBasket, action }) => {
	const { name, price, quantityInBasket } = product;
	return (
		<div className="Product">
			<div className="Product-image"></div>
			{name}
			<br />
			price: {price} {CURRENCIES[currency]}
			<br />
			{action === "Remove" && ` quantity: ${quantityInBasket}`}
			<button onClick={() => updateBasket(name)}>{action}</button>
		</div>
	);
};
export default Product;
