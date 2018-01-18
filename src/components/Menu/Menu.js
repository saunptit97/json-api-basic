import React, { Component } from "react";
import { Link } from "react-router-dom";
class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              {" "}
              Logo
            </Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product-list">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Menu;
