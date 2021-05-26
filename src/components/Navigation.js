import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <section className="navigation-container">
      <div className="navigation">
        <img
          src="https://image.flaticon.com/icons/png/512/860/860831.png"
          className="navigation-img"
        />
        <div className="navigation-content">
          <Link to="/" className="navigation-home">
            Home
          </Link>
          <Link to="/about" className="navigation-about">
            About
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
