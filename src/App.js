import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home"
import Docs from "./Docs"
import Features from './Features';

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
