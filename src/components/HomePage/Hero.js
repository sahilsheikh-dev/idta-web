import React from "react";
// import { Container } from "react-bootstrap";
// import IDTALogo from "../../assets/img/idta-logo.png";

const Hero = () => {
  return (
    <>
      <section
        className="hero pt-4 section pb-0 mb-0"
        id="hero"
        // style={{ minHeight: "80vh" }}
      >
        <div className="row mt-5 m-0 pb-0 mb-0">
          <div
            className="col-md-6 col-lg-6 col-xl-6 mb-0 mb-md-0 mb-lg-0 mb-xl-0 d-flex align-items-center p-0"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/6101965/pexels-photo-6101965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="text-center h-100 w-100 p-2 p-md-5 p-lg-5 p-xl-5 d-flex align-items-center"
              style={{ background: "rgba(0, 0, 0, 0.6)" }}
            >
              <div className="container py-5">
                <h3 className="fw-bold">
                  Wishing You a Bright and Prosperous New Year
                </h3>
                <p
                  className="mt-3"
                  style={{
                    fontSize: "22px",
                  }}
                >
                  Happy New Year! As we close the door on the past and look
                  forward to the future, we want to take a moment to wish you
                  all the best in the coming year. May 2022 bring you joy,
                  health, and prosperity. Here's to a bright and successful new
                  year for all of us!
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#193A67",
            }}
          >
            <div className="container py-5">
              <h1 className="fw-bold">Welcome to IDTA,</h1>
              <p
                className="mt-3"
                style={{
                  fontSize: "22px",
                }}
              >
                The Indian Dental Technician Association is a Pvt.Organization
                for Dental Laboratory's and Dental Technicians in India and we
                are committed to keeping member in touch with what is going in
                Dental Technology and the wider dental arena as well as
                facilitating our members with the tools they need to stay
                educated and compliant. Currently the I.D.T.A has 200+ Members
                and 500+ Socially connected Members
              </p>
              <button
                className="btn btn-success border-0 mx-auto px-4 shadow-none btn-lg fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Contact Us Now
              </button>
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
    </>
  );
};

export default Hero;
