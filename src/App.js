import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import BeersList from './components/beers-list.component';
import CreateBeer from './components/create-beer.component';
import EditBeer from './components/edit-beer.component';

class App extends Component {
  render () {
    return (
      <Router>
        
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">MERN-Stack Ale-PI App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Beers</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Beer</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={BeersList} />
          <Route path="/edit:id" component={EditBeer} />
          <Route path="/create" compoenent={CreateBeer} />
        </div>
      </Router>
    )
  }
}

export default App;
