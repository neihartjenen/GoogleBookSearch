import React from 'react';
import Nav from "./components/Nav";
import Book from "./pages/Book";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <Nav/>
        <Switch>
          <Route exact path="/" component={Book}/>
        </Switch>
      
      </div>
    </Router>
   
  );
}

export default App;
