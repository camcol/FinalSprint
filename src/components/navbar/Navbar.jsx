import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navBar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Product List</Link>
        <Link to="/Cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
