import { createContext } from "react";

export const appContext = createContext();

export const ContextProvider = (props) => {
	return (
		<appContext.Provider value={{ msg: "message" }}>
			{props.children}
		</appContext.Provider>
	);
};
