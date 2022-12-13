import React from "react";
import { Container } from "react-bootstrap";

const JoinUs = () => {
  return (
    <Container>
      <section className="joinus" id="joinus" style={{ minHeight: "80vh" }}>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5">
            <div>
              <h1 className="fw-bold">
                <span className="text-custom-primary">Join </span>
                Us
              </h1>
              <p className="text-secondary mt-3">
                An Organization dedicated to the interest of dental laboratory
                owners and technicians. Established and run by Dental
                Technicians for Dental Technician and Laboratory Owners.
                Committed to raising standards for the industry. Expert support
                and guidance for every aspect of your business, from Starting Up
                and day-to-day operations to employment issues and representing
                your view. Actively promotes IDTA Member Laboratories to the
                Indian Dentists. An annual exhibition dedicated to dental
                technology. Regular journal and information bulletins give you
                briefings on current events and product developments. Specially
                negotiated money-saving deals designed to maximize your budgets.
                We provide an annual conference, significantly discounted for
                members. We Also provide a range of online CPD courses. Members
                receive the IDTA newsletter. We offer peer review advice and
                support.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 p-2 m-0">
                <div className="card card-body bg-dark service-card">
                  <div className="my-0 d-flex align-items-center">
                    <div className="text-start">
                      <h4 className="text-light">Dental Technician</h4>
                      <h6 className="text-light">Rs 1500 +GST</h6>
                      <p className="my-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 p-2 m-0">
                <div className="card card-body bg-dark service-card">
                  <div className="my-0 d-flex align-items-center">
                    <div className="text-start">
                      <h4 className="text-light">Laboratory Membership</h4>
                      <h6 className="text-light">Rs 2000 +GST</h6>
                      <p className="my-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 p-2 m-0">
                <div className="card card-body bg-dark service-card">
                  <div className="my-0 d-flex align-items-center">
                    <div className="text-start">
                      <h4 className="text-light">Associate Membership</h4>
                      <h6 className="text-light">Rs 2000 +GST</h6>
                      <p className="my-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 p-2 m-0">
                <div className="card card-body bg-dark service-card">
                  <div className="my-0 d-flex align-items-center">
                    <div className="text-start">
                      <h4 className="text-light">Student Membership</h4>
                      <h6 className="text-light">Rs 1000 +GST</h6>
                      <p className="my-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
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

export default JoinUs;
