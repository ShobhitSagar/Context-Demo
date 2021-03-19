import "./App.css";
import AppState from "./context/AppState";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";

function App() {
	return (
		<AppState>
			<Comp1 />
			<Comp2 />
		</AppState>
	);
}

export default App;
