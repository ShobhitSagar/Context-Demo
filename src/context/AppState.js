import React from "react";
import AppContext from "./app-context";
function AppState(props) {
	return (
		<AppContext.Provider value={{ msg: "Message" }}>
			{props.children}
		</AppContext.Provider>
	);
}

export default AppState;
