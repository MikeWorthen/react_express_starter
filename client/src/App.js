import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import Search from "./pages/Search";
import Results from "./pages/Results";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
  <Router>
    <div>
    <AppNavbar />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
