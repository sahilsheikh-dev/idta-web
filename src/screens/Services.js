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
              </div>
            </div>
            <div className="col-md-12 col-lg-12 col-xl-12 mb-5 d-flex align-items-center">
              <div className="row">
                {serviceData.map((serviceItem, index) => (
                  <div
                    className="col-6 col-md-3 col-lg-3 col-xl-3 my-2"
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
          <div>
            <h1 className="fw-bold">
              <span className="text-custom-primary">Communicate</span>
            </h1>
            <p className="text-secondary mt-3">
              Dental Technology is in exciting times with the rapid developments
              of digital dental technology. We regularly communicate to the
              I.D.T.A membership through our E-mail newsletter, social media and
              the I.D.T.A. website (Launching soon) to highlight important
              information and keep members up to date with what is going on in
              dental technology.
            </p>
          </div>
          <div>
            <h1 className="fw-bold">
              <span className="text-custom-primary">Support</span>
            </h1>
            <p className="text-secondary mt-3">
              Being part of the I.D.T.A. community gives members access to a
              wealth of information, advice sheets and guidance documents on a
              variety of topics within the members area of the I.D.T.A. website
              including; regulatory updates and requirements, technical,
              templates and business management. Not only that, the I.D.T.A.
              office and support team are there to help you with your enquiries.
            </p>
          </div>
          <div>
            <h1 className="fw-bold">
              <span className="text-custom-primary">Support</span>
            </h1>
            <ul className="text-secondary mt-3">
              <li>
                IDTA work with students to provide a seamless transaction from
                Universities, Colleges & Institutes into the profession ensuring
                a well trained fully supported work forces into the future.
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
              <li>An open form for you to share your thoughts. </li>
              <li>Group study, group study with other association. </li>
              <li>
                Annual conferences. Our annual conference provide world class
                CPD, great social events and the chance to connect with expert
                with 1st Class Speakers and time to catch with colleagues.
              </li>
              <li>
                Collected and shared, so, you can stay on top of the latest
                research and news from across the profession, saving your time,
                so, you can focus on what's important for your patient.
              </li>
            </ul>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Services;
