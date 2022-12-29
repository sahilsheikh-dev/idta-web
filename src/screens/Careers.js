import React from "react";
// import { Container } from "react-bootstrap";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";

const Careers = () => {
  return (
    <div>
      <Navbar />
      <section
        className="hero pt-4 section pb-0 mb-0"
        id="hero"
        // style={{ minHeight: "80vh" }}
      >
        <div className="row mt-5 m-0 pb-0 mb-0">
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-0"
            style={{ background: "#090909" }}
          >
            <img
              className="img-fluid mx-auto w-100 h-100"
              src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              <h1 className="fw-bold">Career</h1>
              <p
                className="mt-3"
                style={{
                  fontSize: "22px",
                }}
              >
                We are bringing out the best in class professionals through
                smart memebership and employment process. Lets join hands and
                become a bigger family.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
            }}
          >
            <div className="container py-5">
              <h1 className="fw-bold">Commericial Dental Laboratories</h1>
              <p
                className="mt-3"
                style={{
                  fontSize: "22px",
                }}
              >
                These laboratories are where most dental technician work, either
                as employees or with experience, running their own Laboratories.
                The laboratories, which ranges from single handed organization
                through to large companies, receive prescriptions from dentists
                and carry out work required. They also repair or modify
                appliances. A large laboratory deals with a wide variety of work
                and may offer the opportunity to specialize.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-0"
            style={{ background: "#090909" }}
          >
            <img
              className="img-fluid mx-auto w-100 h-100"
              src="https://images.pexels.com/photos/7788506/pexels-photo-7788506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-0"
            style={{ background: "#090909" }}
          >
            <img
              className="img-fluid mx-auto w-100 h-100"
              src="https://images.pexels.com/photos/6627536/pexels-photo-6627536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              <h1 className="fw-bold">Dental Clinics</h1>
              <p
                className="mt-3"
                style={{
                  fontSize: "22px",
                }}
              >
                A few dental clinics may employ their own dental technician to
                carry out work on the premises, thought most practices use
                commercial laboratories.In a Dental clinic the dental technician
                would deal with quite a wide range of work, often specializing
                to meet the needs to the particular practice.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
            }}
          >
            <div className="container py-5">
              <h1 className="fw-bold">Career Information</h1>
              <p className="mt-3">
                Dental Technology is a growing sector that offer a wide range of
                significant career opportunities both in India and
                internationally.
                <br />
                A Dental Technologist "also known as Dental technician and
                dental mechanic" is a highly skills professional who specialties
                in the design, construction, repair and adjustment of a wide
                range of dental technologies.
                <br />
                <br />
                Dental Technologist focus on five areas:-
                <br />
                Restoring natural teeth through the use of crown, inlays and
                veneers.
                <br />
                Replacing teeth via bridges, dentures and implants. Oral
                reconstruction.
                <br />
                Orthodontic correction via braces, trays and mouth guards.
                <br />
                Orthognathic adjustment, i.e. jaw realignment.
                <br />
                Dental technologist work loosely with practitioners such as
                dentist and dental prosthetists, and apply a wide range of
                techniques that include plaster casting, electro-spot welding,
                metal casting and polishing, wax modelling, ceramics, wire
                bending, electroplating and sandblasting.
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
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-0"
            style={{ background: "#090909" }}
          >
            <img
              className="img-fluid mx-auto w-100 h-100"
              src="https://images.pexels.com/photos/3779697/pexels-photo-3779697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="logo"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
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
                <h5 className="text-secondary mb-3">Contact Now</h5>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                    placeholder="Name"
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
                    placeholder="Message"
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

export default Careers;
