import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = (props) => {
  return (
    <header className="Header">
      <div className="container">
        <div className="navLinks">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
              <a class="navbar-brand" href="#home">
                <img className="img-fluid" src="/images/logo.png" alt="" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <Link to="/">
                    <Button titleName="Home" />
                  </Link>
                  <Link to="/">
                    <Button titleName="Product" />
                  </Link>
                  <Link to="/">
                    <Button titleName="Contact" />
                  </Link>
                  <a href="#home" className="headerLinks">
                    <img className="img-fluid" src="/images/sound.png" alt="" />
                  </a>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
