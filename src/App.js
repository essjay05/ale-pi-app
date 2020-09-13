import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import BeersList from './components/beers-list.component';

import logo from "./logo.png";

class App extends Component {
  render () {
    return (
      <Router>
        
        <div className="container">
          <h2>MERN-Stack Ale-PI App</h2>
        </div>
        <Route path="/" exact component="{BeersList}" />
        <Route path="/edit:id" component="{EditBeer}" />
        <Route path="/create" compoenent="CreateBeer}" />
      </Router>
    )
  }
}

export default App;
