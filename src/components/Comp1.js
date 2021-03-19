import React, { useContext } from "react";
import AppContext from "../context/app-context";

function Comp1() {
	const { isAuth } = useContext(AppContext);
	return (
		<div style={{ background: isAuth ? "green" : "red" }}>
			<h1>Comp1</h1>
		</div>
	);
}

export default Comp1;
