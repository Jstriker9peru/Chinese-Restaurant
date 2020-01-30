import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getInitialData } from './components/reducers/mainReducer';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import MenuPage from './components/MenuPage/MenuPage';
import CartPage from './components/CartPage/CartPage';
import ContactPage from './components/ContactPage/ContactPage';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StripeProvider } from 'react-stripe-elements';
import './App.scss';

const App = ({ getInitialData }) => {
  
  useEffect(() => {
    getInitialData()
  }, [getInitialData])

  return (
    <Router>
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="App">
          <Navbar />
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/home"} component={HomePage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/menu/:type" component={MenuPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Footer />
        </div>
      </StripeProvider>
    </Router>
  );
}

const actions = {
  getInitialData
}

export default connect(null, actions)(App);
