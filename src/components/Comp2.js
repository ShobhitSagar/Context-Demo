import React, { useContext } from "react";
import AppContext from "../context/app-context";

function Comp2() {
	const { msg } = useContext(AppContext);

	return (
		<div>
			<h1>Comp2</h1>
			<p>{msg}</p>
		</div>
	);
}

export default Comp2;
