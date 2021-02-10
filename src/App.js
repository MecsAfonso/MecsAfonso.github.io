import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Curriculum from "./Curriculum";
import Portafolio from "./Portafolio";
import Home from "./Home";

function App() {
  return (
    
    <Router>
   

   <div className="App">
      
        <Switch>
          <Route path="/curriculum">
            <Header />
            <Curriculum />
          </Route>
          <Route path="/portafolio">
            <Header />
            <Portafolio />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

    </div>

  </Router>

   
  );
}

export default App;
