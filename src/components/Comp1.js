import React, { useContext } from "react";
import AppContext from "../context/app-context";

function Comp1() {
	const { isAuth, setAuth } = useContext(AppContext);

	return (
		<div style={{ background: isAuth ? "green" : "red" }}>
			<h1>Comp1</h1>
			{isAuth ? (
				<button onClick={() => setAuth(false)}>Logout</button>
			) : (
				<button onClick={() => setAuth(true)}>Login</button>
			)}
		</div>
	);
}

export default Comp1;
