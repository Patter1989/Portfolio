
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects.jsx";


const Home = lazy(() => import("./pages/Home/Home.jsx"));

function App() {
    return (
			<>
				<Navbar />
				<Suspense
					fallback={<p className='text-center mt-10'>Завантаження...</p>}
				>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/projects'
							element={<Projects />}
						/>
					</Routes>
				</Suspense>
			</>
		);
}

export default App
