import React, { Component } from "react";
import "./App.css";
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import NoMatch from "./pages/NoMatch"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

class App extends Component {
  render() {
    return ( 
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route exact path="/saved" component={Saved}/>
            <Route exact path="*" component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
