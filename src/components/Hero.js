import React from "react";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <Container>
      <section className="hero" id="hero" style={{ minHeight: "80vh" }}>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
            <div>
              <h1 className="fw-bold">Welcome to IDTA,</h1>
              <p className="text-secondary mt-3">
                The IDTA{" "}
                <span className="text-light">
                  {"("}
                  Indian Dental Technician Association
                  {")"}
                </span>{" "}
                is focused on advancing dental technology and ensuring a
                propersous future is secured for dental technicians.
              </p>
              <p className="text-secondary mb-5">
                We are seeking professional and enthusiastric people to join our
                team by representing each State. If this intersts you, please
                contact us.
              </p>
              <a
                href="#joinus"
                className="btn btn-dark border-0 mx-2 ms-0 px-4 py-2 mb-5 shadow-none"
              >
                Contact Us Now
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 mb-5 d-flex align-items-center">
            <img
              className="img-fluid mx-auto"
              src="https://images.pexels.com/photos/6812536/pexels-photo-6812536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="logo"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
