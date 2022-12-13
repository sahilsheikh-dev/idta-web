import React from "react";
import { Container } from "react-bootstrap";

const Careers = () => {
  return (
    <Container>
      <section className="careers" id="careers" style={{ minHeight: "80vh" }}>
        <div className="row">
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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since 1500s.
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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since 1500s.
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
  );
};

export default Careers;
