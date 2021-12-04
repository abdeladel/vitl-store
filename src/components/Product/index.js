import React from "react";

const Product = ({ product, currency, updateBasket, action }) => {
	const { name, price, quantityInBasket } = product;
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				flexWrap: "wrap",
				margin: "10px",
				width: 150,
			}}
		>
			<div
				style={{ height: 100, width: "100%", backgroundColor: "gray" }}
			></div>
			{name}
			<br />
			<div style={{ textAlign: "right" }}>
				{price} {currency} {action === "Remove" && `x ${quantityInBasket}`}
			</div>
			<button onClick={() => updateBasket(name)}>{action}</button>
		</div>
	);
};
export default Product;
