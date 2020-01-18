import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import MenuPage from './components/MenuPage/MenuPage';
import CartPage from './components/CartPage/CartPage';
import ContactPage from './components/ContactPage/ContactPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

class App extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
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
}

export default App;
