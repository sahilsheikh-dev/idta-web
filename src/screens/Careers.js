import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";

const Careers = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <section
          className="careers pt-5 mt-5"
          id="careers"
          style={{ minHeight: "80vh" }}
        >
          <div className="row mt-5">
            <div className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5">
              <div>
                <h1 className="fw-bold">
                  <span className="text-custom-primary">Career </span>
                  Benefits
                </h1>
                <p className="text-secondary mt-3">
                  We are bringing out the best in class professionals through
                  smart memebership and employment process. Lets join hands and
                  become a bigger family.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 mb-5 d-flex align-items-center">
              <div className="text-start">
                <div className="card card-body bg-dark service-card my-2">
                  <div className="row">
                    <div className="col-3 my-2 d-flex align-items-center d-none d-md-block d-lg-block d-xl-block">
                      <img
                        className="img-fluid mx-auto w-100"
                        src="https://icons.veryicon.com/png/o/object/industry-icon/industry-icon-education-and-training.png"
                        alt="logo"
                      />
                    </div>
                    <div className="col-md-9 col-lg-9 col-xl-9 my-2 d-flex align-items-center">
                      <div className="text-start">
                        <h4 className="text-light">
                          Commericial Dental Laboratories
                        </h4>
                        <p className="my-0">
                          These laboratories are where most dental technician
                          work, either as employees or with experience, running
                          their own Laboratories. The laboratories, which ranges
                          from single handed organization through to large
                          companies, receive prescriptions from dentists and
                          carry out work required. They also repair or modify
                          appliances. A large laboratory deals with a wide
                          variety of work and may offer the opportunity to
                          specialize.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-body bg-dark service-card my-2">
                  <div className="row">
                    <div className="col-3 my-2 d-flex align-items-center d-none d-md-block d-lg-block d-xl-block">
                      <img
                        className="img-fluid mx-auto w-100"
                        src="https://icons.veryicon.com/png/o/object/industry-icon/industry-icon-education-and-training.png"
                        alt="logo"
                      />
                    </div>
                    <div className="col-md-9 col-lg-9 col-xl-9 my-2 d-flex align-items-center">
                      <div className="text-start">
                        <h4 className="text-light">Dental Clinics</h4>
                        <p className="my-0">
                          A few dental clinics may employ their own dental
                          technician to carry out work on the premises, thought
                          most practices use commercial laboratories.In a Dental
                          clinic the dental technician would deal with quite a
                          wide range of work, often specializing to meet the
                          needs to the particular practice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Careers;
