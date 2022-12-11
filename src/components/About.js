import React from "react";
import { Container } from "react-bootstrap";
import IDTALogo from "../assets/img/idta-logo.png";

const About = () => {
  return (
    <Container>
      <section className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 mb-5 d-flex align-items-center">
            <img className="img-fluid mx-auto" src={IDTALogo} alt="logo" />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
            <div style={{ textAlign: "justify" }}>
              <h1 className="fw-bold">Who We Are</h1>
              <p className="text-secondary mt-0">
                Welcome, Indian Dental Technician Association (I.D.T.A) The
                I.D.T.A. is a leading professional body for Dental Technician in
                India. Run by Dental Technicians for dental Technicians.Our team
                are committed to advancing within dental technology for the
                benefit of the oral healthcare of the nation. We represent
                individual dental technician,providing lifelong learning
                ,advice,guidance and support to our members and raise awareness
                of the key issues affecting the dental technology profession. By
                joining the I.D.T.A you will have added your voice to the dental
                technician profession within India. The LD.T.A plays a pivotal
                role in driving standard for the provision of quality oral
                healthcare. The Indian Dental Technician Association is a Pvt.
                Organization for Dental Laboratory's and Dental Technicians in
                India and we are committed to keeping member in touch with what
                is going in Dental Technology and the wider dental arena as well
                as facilitating our members with the tools they need to stay
                educated and compliant. Currently the IDTA has 200+ members and
                500+ socially connected members.
              </p>
              <a
                href="#joinus"
                className="btn btn-secondary border-0 mx-2 ms-0 px-4 py-2 mb-5 shadow-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Register Now
              </a>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
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
                      <h5 className="text-secondary mb-3">
                        Laboratory Details
                      </h5>
                      <div class="mb-3">
                        <input
                          type="text"
                          class="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                          placeholder="Lab Name"
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          type="tel"
                          class="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                          placeholder="Contact Number"
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          type="email"
                          class="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                          placeholder="Email"
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          type="text"
                          class="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                          placeholder="Website"
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          type="text"
                          class="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
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
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
