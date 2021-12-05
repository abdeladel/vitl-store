import React from "react";
import { CURRENCIES } from "../../constants";
import "./styles.css";

const Product = ({ product, currency, updateBasket, action }) => {
	const { name, price, quantityInBasket } = product;
	return (
		<div className="Product">
			<div className="Product-image"></div>
			<div className="Product-details">
				{name}
				<br />
				price: {price} {CURRENCIES[currency]}
				<br />
				{action === "Remove" && ` quantity: ${quantityInBasket}`}
			</div>
			<button className="Product-button" onClick={() => updateBasket(name)}>
				{action}
			</button>
		</div>
	);
};
export default Product;
