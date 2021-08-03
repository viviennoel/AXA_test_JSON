
import React, { Component } from 'react';
import { history } from './helpers/history';
import Home from './screens/home';
import Stats from './screens/stats';
// For a production build, use Router instead of BrowserRouter (ignores the history)
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './assets/style.css';

class App extends Component {

  render() {
    return (
      <div>
        <Router history={history}>
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
