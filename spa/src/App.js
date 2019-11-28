import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'

function App() {
  return (
    <Router>
      <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-menu">
            <Link className="navbar-item" to="/">Home</Link>
          </div>
        </div>
      </nav>
      <br/>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
      </Switch>
    </Router>  
  );
}

export default App;
