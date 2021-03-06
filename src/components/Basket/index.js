import React, { useContext } from "react";
import { AppContext } from "../../store";
import Product from "../Product";
import { REMOVE_PRODUCT_FROM_BASKET } from "../../store/actions";
import "./styles.css";

const Basket = () => {
	const {
		dispatch,
		state: { products, currency, error },
	} = useContext(AppContext);

	const itemsInBasket = products.filter((product) => product.quantityInBasket);

	const removeFromBasket = (name) =>
		dispatch({
			type: REMOVE_PRODUCT_FROM_BASKET,
			payload: name,
		});

	return (
		<>
			<h2>Basket</h2>
			{!itemsInBasket.length ? (
				"no items in basket"
			) : (
				<>
					<div className="Basket-section">
						{itemsInBasket.map((p) => (
							<Product
								product={p}
								currency={currency}
								action="Remove"
								updateBasket={removeFromBasket}
							/>
						))}
					</div>
					{error && <em className="Basket-error">{error}</em>}
				</>
			)}
		</>
	);
};

export default Basket;
