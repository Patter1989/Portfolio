import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "../index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<BrowserRouter>
			<StrictMode>
				<App />
			</StrictMode>
		</BrowserRouter>
	</Provider>
);
