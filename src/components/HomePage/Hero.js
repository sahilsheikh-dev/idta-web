import React from "react";
import { Container } from "react-bootstrap";
import IDTALogo from "../../assets/img/idta-logo.png";

const Hero = () => {
  return (
    <Container>
      <section
        className="hero pt-5 mt-5 section"
        id="hero"
        style={{ minHeight: "80vh" }}
      >
        <div className="row mt-5">
          <div className="col-md-6 col-lg-6 col-xl-6 mb-5 d-flex align-items-center">
            <div className="text-center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={IDTALogo}
                      alt="Avatar"
                      style={{
                        width: "300px",
                        height: "300px",
                      }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src={IDTALogo}
                      alt="Avatar"
                      style={{
                        width: "300px",
                        height: "300px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <button
                className="btn btn-secondary border-0 mx-2 px-4 py-2 mt-5 shadow-none btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Contact Us Now
              </button>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
            <div>
              <h1 className="fw-bold">Welcome to IDTA,</h1>
              <p
                className="text-secondary mt-3"
                style={{
                  fontSize: "22px",
                }}
              >
                {/* <span className="text-light">
                  {"("}
                  Indian Dental Technician Association
                  {")"}
                </span>{" "} */}
                The Indian Dental Technician Association is a Pvt.Organization
                for Dental Laboratory’s and Dental Technicians in India and we
                are committed to keeping member in touch with what is going in
                Dental Technology and the wider dental arena as well as
                facilitating our members with the tools they need to stay
                educated and compliant. Currently the I.D.T.A has 200+ Members
                and 500+ Socially connected Members
              </p>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content"
              style={{
                background: "#000000",
                border: "1px solid #ffffff",
              }}
            >
              <div
                className="modal-header"
                style={{
                  borderBottom: "none",
                }}
              >
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Register With Us
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h5 className="text-secondary mb-3">Laboratory Details</h5>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                    placeholder="Lab Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                    placeholder="Contact Number"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                    placeholder="Website"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                    placeholder="Full Name of Lab Owner(s)"
                  />
                </div>
              </div>
              <div
                className="modal-footer"
                style={{
                  borderTop: "none",
                }}
              >
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary btn-sm">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
