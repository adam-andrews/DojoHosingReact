import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home"
import Docs from "./pages/Docs"
import Features from './pages/Features';

function App() {
	return (
		<div>
			<Router>
				<Routes>
                <Route path="/docs" element={<Docs/>}/>	
                <Route path="/features" element={<Features/>}/>	
				<Route path="/" element={<Home/>}/>	
				</Routes>
			</Router>
		</div>
	);
}

export default App;
