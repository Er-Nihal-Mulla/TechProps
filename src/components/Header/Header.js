import React from "react";
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <div className="banner">
        <Navbar/>
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Welsome to our Tech studio</h3>
            <h1>TechProps</h1>
            <p>
              Grow your skills with Us.
            </p>
            <div className="banner__btn">
              <a href="/" className="btn btn-smart">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;