
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Routers from './router';

class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <Router>
          <Switch>
            <Route path="/" exact component={Routers["/"]} />
            <Route path="/index" exact component={Routers["/index"]} />
            <Route component={Routers['/404']} />
          </Switch>
      </Router>
    );
  }
}

export default App;
