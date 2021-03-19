import "./App.css";
import { ContextProvider } from "./context/app-context";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";

function App() {
	return (
		<ContextProvider>
			<Comp1 />
			<Comp2 />
		</ContextProvider>
	);
}

export default App;
