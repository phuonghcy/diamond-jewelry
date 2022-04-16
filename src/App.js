import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/gio-hang" element={<CartPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</Router>
	);
}

export default App;
