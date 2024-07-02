import { Toaster } from "react-hot-toast";
import "./App.css";

import Login from "./components/LoginSignup/Login";

function App() {
	return (
		<div>
			<Login />
			<Toaster />
		</div>
	);
}

export default App;
