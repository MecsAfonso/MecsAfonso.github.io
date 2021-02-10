import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
  return (

    <div className="header">
      <Link to="/portafolio">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

    </div>
  );
}

export default Header;