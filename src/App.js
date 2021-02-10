import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";


function App() {
  return (
    
    <Router>
   

   <div className="App">
      
        <Switch>
          <Route path="/curriculum">
            <Header />
          </Route>
          <Route path="/portafolio">
            <Header />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>

    </div>

  </Router>

   
  );
}

export default App;
