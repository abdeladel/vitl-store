import React, { useContext, useEffect } from "react";
import { AppContext } from "./store";
import {
	ADD_PRODUCT_TO_BASKET,
	SET_NUTRIENTS_CONFIGURATION,
	SET_PRODUCTS_LIST,
} from "./actions";
import Product from "./Product";

const ProductList = () => {
	const {
		dispatch,
		state: { products, currency },
	} = useContext(AppContext);

	useEffect(() => {
		fetch("https://vitl-static-api.s3-eu-west-1.amazonaws.com/fe-test.json")
			.then((res) => res.json())
			.then(({ products, config }) => {
				dispatch({ type: SET_PRODUCTS_LIST, payload: products });
				dispatch({ type: SET_NUTRIENTS_CONFIGURATION, payload: config });
			});
	}, [dispatch]);
	const AddToBasket = (name) =>
		dispatch({
			type: ADD_PRODUCT_TO_BASKET,
			payload: name,
		});
	return (
		<>
			<h2>Products</h2>
			<div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
				{products.map((p) => (
					<Product
						product={p}
						currency={currency}
						action="Add to basket"
						updateBasket={AddToBasket}
					/>
				))}
			</div>
		</>
	);
};

export default ProductList;
