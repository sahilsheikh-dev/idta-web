import React from "react";
import { Container } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import "../../assets/js/navbar.js";
// import IDTALogo from "../../assets/img/idta-logo.png";

const Navbar = () => {
  return (
    <Container>
      <nav
        className="navbar navbar-expand-lg fixed-top py-3"
        style={{ background: "#000000", opacity: "0.9" }}
      >
        <div className="container">
          <a className="navbar-brand text-light fw-bold" href="/">
            <span className="d-none d-md-block d-lg-block d-xl-block">
              Indian Dental Technician Association
            </span>
            <span className="d-block d-md-none d-lg-none d-xl-none">IDTA</span>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="mainNav">
              <li className="nav-item mx-3">
                <a
                  id="heroSection"
                  className="nav-link text-light nav-active text-decoration-none"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  id="aboutSection"
                  className="nav-link text-light text-decoration-none"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  id="membershipSection"
                  className="nav-link text-light text-decoration-none"
                  href="/membership"
                >
                  Membership Benefits
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  id="servicesSection"
                  className="nav-link text-light text-decoration-none"
                  href="/service"
                >
                  Services
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  id="educationSection"
                  className="nav-link text-light text-decoration-none"
                  href="/education"
                >
                  Education
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  id="careersSection"
                  className="nav-link text-light text-decoration-none"
                  href="/career"
                >
                  Careers
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  id="joinusSection"
                  className="nav-link text-light text-decoration-none"
                  href="/joinus"
                >
                  Join Us
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-light" href="/login">
                  Login
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
