import React from "react";
import { Container } from "react-bootstrap";
import serviceJson from "../assets/jsonData/ServiceData.json";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";

const Services = () => {
  const serviceData = serviceJson;

  return (
    <div>
      <Navbar />
      <Container>
        <section
          className="services pt-5 mt-5"
          id="services"
          style={{ minHeight: "80vh" }}
        >
          <div className="row mt-5">
            <div className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5">
              <div>
                <h1 className="fw-bold">
                  <span className="text-custom-primary">Exclusive</span>{" "}
                  Services
                </h1>
                <p className="text-secondary mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since 1500s.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-12 col-xl-12 mb-5 d-flex align-items-center">
              <div className="row">
                {serviceData.map((serviceItem, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-4 col-xl-4 my-2"
                    key={index}
                  >
                    <div className="card card-body bg-dark text-center service-card">
                      <img
                        className="img-fluid mx-auto w-100"
                        src={serviceItem.logoImg}
                        alt="logo"
                      />
                      <p className="my-0 text-start">{serviceItem.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Services;
