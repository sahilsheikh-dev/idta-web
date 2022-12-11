import React from "react";
import { Container } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import IDTALogo from "../assets/img/idta-logo.png";

const Navbar = () => {
  return (
    <Container>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <a className="navbar-brand w-25 text-light fw-bold" href="/">
            <img
              className="w-25 me-auto d-none d-md-block d-lg-block d-xl-block"
              src={IDTALogo}
              alt="logo"
            />
            <img
              className="w-75 me-auto d-block d-md-none d-lg-none d-xl-none"
              src={IDTALogo}
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-light">
              <List />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <a
                  className="nav-link text-light nav-active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-light" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-light" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-light" href="#membership">
                  Membership Benefits
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-light" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-light" href="#careers">
                  Careers
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-light" href="#joinus">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
