import React, { Component } from "react";
import "./navbar.scss";
import logo from "../../logo.png";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar">
        <img src={logo} alt="city tours logo" />
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              about
            </a>
          </li>
          <li>
            <a href="/" className="nav-link active">
              tours
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
