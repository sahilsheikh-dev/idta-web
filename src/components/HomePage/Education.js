import React from "react";
import { Container } from "react-bootstrap";

const Education = () => {
  return (
    <Container>
      <section className="education" id="education" style={{ minHeight: "80vh" }}>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5">
            <div>
              <h1 className="fw-bold">
                <span className="text-custom-primary">Education </span>
                Benefits
              </h1>
              <p className="text-secondary mt-3">
                IDTA is your resources to education and training from our annual
                In depth convention and hands on workshops to lectures and
                convenient online learning sessions.
                <br />
                IDTA gives you access to the brightest minds in the profession.
                You can advertise jobs or your own skills via the IDTA job
                advertising facility.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 mb-5 d-flex align-items-center">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 my-2">
                <div className="card card-body bg-dark text-center service-card">
                  <img
                    className="img-fluid mx-auto w-100"
                    src="https://icons.veryicon.com/png/o/object/industry-icon/industry-icon-education-and-training.png"
                    alt="logo"
                  />
                  <p className="my-0">
                    CPD can involve eighter formal and structured or informal
                    and self-directed learning.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 my-2">
                <div className="card card-body bg-dark text-center service-card">
                  <img
                    className="img-fluid mx-auto w-100"
                    src="https://icons.veryicon.com/png/o/object/industry-icon/industry-icon-education-and-training.png"
                    alt="logo"
                  />
                  <p className="my-0">
                    Verinable CPD is a learning and development program that's
                    been approved by the IDTA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Education;
