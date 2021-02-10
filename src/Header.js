import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
  return (

    <div className="header">
      <Link to="/">
      <h1>home</h1>
      </Link>
      <Link to="/curriculum">
      <h1>curriculum</h1>
      </Link>
      <Link to="/portafolio">
      <h1> portafolio </h1>
      </Link>

    </div>
  );
}

export default Header;