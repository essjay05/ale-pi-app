import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



class App extends Component {
  render () {
    return (
      <Router>
        <Route path="/" exact component="{BeersList}" />
        <Route path="/edit:id" component="{EditBeer}" />
        <Route path="/create" compoenent="CreateBeer}" />
        <div className="container">
          <h2>MERN-Stack Ale-PI App</h2>
        </div>
      </Router>
    )
  }
}

export default App;
