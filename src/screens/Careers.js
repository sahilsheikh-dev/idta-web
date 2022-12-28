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
            style={{ background: "#193A67" }}
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
              background: "#193A67",
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
              background: "#193A67",
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
            style={{ background: "#193A67" }}
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
            style={{ background: "#193A67" }}
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
              background: "#193A67",
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Careers;
