import React from "react";
import { Link } from "react-router-dom";
// import { Container } from "react-bootstrap";
import serviceJson from "../assets/jsonData/ServiceData.json";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";

const Services = () => {
  const serviceData = serviceJson;

  return (
    <div>
      <Navbar />
      <section className="pt-4 section pb-0 mb-0">
        <div className="row mt-5 m-0 pb-0 mb-0">
          <div
            className="col-12 mb-0 mb-md-0 mb-lg-0 mb-xl-0 d-flex align-items-center p-0"
            style={{
              background: "#090909",
            }}
          >
            <div className="text-start h-100 w-100 d-flex align-items-center">
              <div className="container py-5">
                <h1 className="fw-bold">Exclusive Services</h1>
                <div className="row">
                  {serviceData.map((serviceItem, index) => (
                    <div
                      className="col-6 col-md-2 col-lg-2 col-xl-2 my-2"
                      key={index}
                    >
                      {serviceItem.url === "/commingsoon" ? (
                        <Link
                          className="text-decoration-none"
                          to={"/"}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <div
                            className="card card-body bg-light text-dark text-center service-card h-100 d-flex align-items-center"
                            style={{
                              minHeight: "50px",
                              borderRadius: "0",
                            }}
                          >
                            <p className="my-0 fw-bold text-center">
                              {serviceItem.title}
                            </p>
                          </div>
                        </Link>
                      ) : (
                        <Link
                          className="text-decoration-none"
                          to={serviceItem.url}
                        >
                          <div
                            className="card card-body bg-light text-dark text-center service-card h-100 d-flex align-items-center"
                            style={{
                              minHeight: "50px",
                              borderRadius: "0",
                            }}
                          >
                            <p className="my-0 fw-bold text-center">
                              {serviceItem.title}
                            </p>
                          </div>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#FFFFFF",
            }}
          >
            <div className="container py-5 text-dark">
              <h1 className="fw-bold">Communicate</h1>
              <p
                className="mt-3"
                style={{
                  fontSize: "22px",
                }}
              >
                Dental Technology is in exciting times with the rapid
                developments of digital dental technology. We regularly
                communicate to the I.D.T.A membership through our E-mail
                newsletter, social media and the I.D.T.A. website (Launching
                soon) to highlight important information and keep members up to
                date with what is going on in dental technology.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#ffffff",
            }}
          >
            <div className="container py-5 text-dark">
              <h1 className="fw-bold">Support</h1>
              <p
                className="mt-3"
                style={{
                  fontSize: "22px",
                }}
              >
                Being part of the I.D.T.A. community gives members access to a
                wealth of information, advice sheets and guidance documents on a
                variety of topics within the members area of the I.D.T.A.
                website including; regulatory updates and requirements,
                technical, templates and business management. Not only that, the
                I.D.T.A. office and support team are there to help you with your
                enquiries.
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
              <h1 className="fw-bold">Support</h1>
              <p className="mt-3">
                IDTA work with students to provide a seamless transaction from
                Universities, Colleges & Institutes into the profession ensuring
                a well trained fully supported work forces into the future.
                <br />
                Stay connected to those in the market to buy or sale practice
                and equipments.
                <br />
                Mentoring programmes.
                <br />
                We connect with you the leader in the profession, so, you can
                meet, learn and share ideas with them.
                <br />
                An open form for you to share your thoughts.
                <br />
                Group study, group study with other association.
                <br />
                Annual conferences. Our annual conference provide world class
                CPD, great social events and the chance to connect with expert
                with 1st Class Speakers and time to catch with colleagues.
                <br />
                Collected and shared, so, you can stay on top of the latest
                research and news from across the profession, saving your time,
                so, you can focus on what's important for your patient.
              </p>
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
              src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              src="https://images.pexels.com/photos/262470/pexels-photo-262470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              <h1 className="fw-bold">Advertisement</h1>
              <p className="mt-3">
                You can advertise jobs or your own skills via the IDTA job
                advertising facility.
              </p>
              <h1 className="fw-bold">Discount</h1>
              <h4 className="fw-bold">
                IDTA Members enjoy a variety of discounts including:
              </h4>
              <p className="mt-3">
                Members get discounts on Dental Laboratory Products.
                <br />
                Members get discounts on CPD course, Hands on, and Online
                Classes.
                <br />
                Members get descounts on Health Insurances.
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
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h5 className="text-light text-center mb-3">Comming Soon</h5>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;