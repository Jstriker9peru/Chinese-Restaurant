import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import MenuPage from './components/MenuPage/MenuPage';
import CartPage from './components/CartPage/CartPage';
import ContactPage from './components/ContactPage/ContactPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/home"} component={HomePage} />
        <Route exact path="/menu" component={MenuPage} />
        <Route exact path="/menu/:type" component={MenuPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
