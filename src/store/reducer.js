import {
	SET_NUTRIENTS_CONFIGURATION,
	SET_PRODUCTS_LIST,
	ADD_PRODUCT_TO_BASKET,
	REMOVE_PRODUCT_FROM_BASKET,
} from "./actions";
import { INITIAL_STATE } from ".";

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

			const nutrientsInBasket = products
				.filter((product) => product.quantityInBasket)
				.map((product) =>
					product.nutrients.map((nutrient) => ({
						...nutrient,
						amount: nutrient.amount * product.quantityInBasket,
					}))
				)
				.flat()
				.reduce(
					(acc, cur) => ({ ...acc, [cur.id]: (acc[cur.id] || 0) + cur.amount }),
					{}
				);
			const exceededNutrients = [];
			state.tolerableUpperLimits.forEach((nutrient) => {
				if (nutrientsInBasket[nutrient.id] > nutrient.amount)
					exceededNutrients.push(nutrient.id);
			});
			if (exceededNutrients.length)
				return {
					...state,
					error: `This Product cannot be added because you have reached the maximum amount of these vitamins: ${exceededNutrients.join(
						", "
					)}`,
				};
			return {
				...state,
				products,
				error: "",
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
				error: "",
			};
		default:
			return state;
	}
};

export default appReducer;
