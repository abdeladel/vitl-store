import { createContext, useReducer } from "react";
import appReducer from "./reducer";

export const INITIAL_STATE = {
	products: [],
	tolerableUpperLimits: null,
	currency: null,
	error: null,
};

const AppContext = createContext(INITIAL_STATE);

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);
	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };
