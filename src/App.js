import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";


function App() {
  return (
    
    <Router>
   

   <div className="App">
      
      <h1> Hello World</h1>
      <Link to="/portafolio"> <h5> Portafolio </h5> </Link>

    </div>

  </Router>

   
  );
}

export default App;
