
import React, { Component } from 'react';
import { history } from './helpers/history';
import Home from './screens/home';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './assets/style.css';

class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
        // clear alert on location change
        this.props.clearAlerts();
    });
  }

  render() {
    return (
      // Routeur - Navigation
      <div className="App">
        <Router history={history}>
            <Switch>
              <Route path="/" component={Home} />
              <Redirect from="*" to="/" />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
