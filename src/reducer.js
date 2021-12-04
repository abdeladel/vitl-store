import {
	SET_NUTRIENTS_CONFIGURATION,
	SET_PRODUCTS_LIST,
	ADD_PRODUCT_TO_BASKET,
	REMOVE_PRODUCT_FROM_BASKET,
} from "./actions";
import { INITIAL_STATE } from "./store";

const appReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_PRODUCTS_LIST:
			return {
				...state,
				products: payload,
			};
		case SET_NUTRIENTS_CONFIGURATION:
			return {
				...state,
				tolerableUpperLimits: payload.tolerableUpperLimits,
				currency: payload.currency,
			};
		case ADD_PRODUCT_TO_BASKET:
			var products = state.products.map((product) => {
				if (product.name === payload)
					return {
						...product,
						quantityInBasket: (product.quantityInBasket || 0) + 1,
					};
				return product;
			});
			return {
				...state,
				products,
			};
		case REMOVE_PRODUCT_FROM_BASKET:
			var products = state.products.map((product) => {
				if (product.name === payload)
					return {
						...product,
						quantityInBasket: (product.quantityInBasket || 1) - 1,
					};
				return product;
			});
			return {
				...state,
				products,
			};
		default:
			return state;
	}
};

export default appReducer;
