import React, { useState } from "react";
import AppContext from "./app-context";
function AppState(props) {
	const [isAuth, setAuth] = useState(true);

	return (
		<AppContext.Provider value={{ msg: "Message", isAuth }}>
			{props.children}
		</AppContext.Provider>
	);
}

export default AppState;
