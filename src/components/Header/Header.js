import React from "react";
import "./Header.css";
import Logo from "../../assets/outerSpace.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <header id="main-header">
        <div className="header-title">
          <h1>Space</h1>
          <p>All you wanted to know about space in one place.</p>
        </div>
        <div className="header-options">
          <a id="logo-header" href="/">
            <img
              src={Logo}
              className="magazine-logo"
              alt="All you wanted to know about space in one place."
            />
          </a>

          <nav>
            <ul>
              <li>
                  <Link to="/Home">Home</Link>
              </li>
              <li>
                  <Link to="/Explore">Explore</Link>
              </li>
              <li>
                  <Link to="/Galleries">Galleries</Link>
              </li>
              <li>
                  <Link to="/Subscribe">Subscribe</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
