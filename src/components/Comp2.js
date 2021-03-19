import React, { useContext } from "react";
import { appContext } from "../context/app-context";

function Comp2() {
	const { msg } = useContext(appContext);

	return (
		<div>
			<h1>Comp2</h1>
			<p>{msg}</p>
		</div>
	);
}

export default Comp2;
