import React from "react";
import Navbar from "../components/commons/Navbar";
import Footer from "../components/commons/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <section
        className="hero pt-4 section pb-0 mb-0"
        id="hero"
        // style={{ minHeight: "80vh" }}
      >
        <div className="row mt-5 m-0 pb-0 mb-0">
          <div className="col-md-6 col-lg-6 col-xl-6 mb-0 mb-md-0 mb-lg-0 mb-xl-0 d-flex align-items-center p-0">
            <div
              id="carouselExampleControls"
              className="carousel slide w-100 h-100"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
              </div>
              <div className="carousel-inner w-100 h-100">
                <div
                  className="carousel-item active w-100 h-100"
                  style={{
                    backgroundImage: `url("https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
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
                      <h3 className="fw-bold">Wishing You Merry Christmas</h3>
                      <p
                        className="mt-3"
                        style={{
                          fontSize: "22px",
                        }}
                      >
                        Wishing you a joyous Christmas and a happy new year. May
                        your holiday season be filled with love, light, and all
                        your heart's desires.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item w-100 h-100"
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
                        Happy New Year! As we close the door on the past and
                        look forward to the future, we want to take a moment to
                        wish you all the best in the coming year. May 2022 bring
                        you joy, health, and prosperity. Here's to a bright and
                        successful new year for all of us!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon visually-hidden"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon visually-hidden"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
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
        <div className="row m-0 pb-0 mb-0">
          <div
            className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
            }}
          >
            <div className="container py-5">
              <h1 className="fw-bold">What we do for you?</h1>
              <ol className="mt-3">
                <li>
                  IDTA work with students to provide a seamless transaction from
                  Universities, Colleges & Institutes into the profession
                  ensuring a well trained fully supported work forces into the
                  future.
                </li>
                <li>
                  Stay connected to those in the market to buy or sale practice
                  and equipments.
                </li>
                <li>Mentoring programmes.</li>
                <li>
                  We connect with you the leader in the profession, so, you can
                  meet, learn and share ideas with them.
                </li>
                <li>
                  An open form for you to share your thoughts. Group study,
                  group study with other association. Annual conferences. Our
                  annual conference provide world class CPD, great social events
                  and the chance to connect with expert with 1st Class Speakers
                  and time to catch with colleagues.
                </li>
                <li>
                  Collected and shared, so, you can stay on top of the latest
                  research and news from across the profession, saving your
                  time, so, you can focus on what's important for your patient.
                </li>
              </ol>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 p-0 my-0"
            style={{
              background: "#090909",
            }}
          >
            <img
              className="img-fluid w-100 h-100 py-0 my-0"
              src="https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="logo"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 p-0 my-0"
            style={{
              background: "#090909",
            }}
          >
            <img
              className="img-fluid w-100 h-100 py-0 my-0"
              src="https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="logo"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
            }}
          >
            <div className="container py-5">
              <h1 className="fw-bold">Reasons to join I.D.T.A</h1>
              <ol className="mt-3">
                <li>
                  An Organisation dedicated to the interest of dental laboratory
                  owners and technicians.
                </li>
                <li>
                  Established and run by Dental Technicians for Dental
                  Technician and Laboratorys Owners.
                </li>
                <li>
                  Expert support and guidance for every aspect of your business,
                  from starting up and day-to-day operations to employment
                  issues and representing your view.
                </li>
                <li>Committed to raising standards for the industry.</li>
                <li>
                  Actively promotes I.D.T.A Member Laboratories to the Indian
                  Dentists.
                </li>
                <li>An annual exhibition dedicated to dental technology.</li>
                <li>
                  Regular journal and information bulletins give you liiefings
                  on current events and product developments.
                </li>
                <li>
                  Specially negotiated money-saving deals designed to maximise
                  your budgets.
                </li>
                <li>
                  We provide an annual conference, significantly discounted for
                  members.
                </li>
                <li>We Also provide a range of online CPD courses.</li>
                <li>Members receive the IDTA newsletter.</li>
                <li>We offer peer review advice and support.</li>
              </ol>
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
      <Footer />
    </div>
  );
};

export default Homepage;
