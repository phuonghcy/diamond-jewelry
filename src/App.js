import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/gio-hang" element={<CartPage />} />
				<Route path="/dang-nhap" element={<LoginPage />} />
				<Route path='/lien-he' element={<ContactPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
