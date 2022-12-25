import React, { useState } from "react";
import { Container } from "react-bootstrap";
import IDTALogo from "../assets/img/idta-logo.png";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";

const About = () => {
  const [currentTab, setCurrentTab] = useState("vision");

  const visionClicked = () => {
    setCurrentTab("vision");
    console.log(currentTab);
  };

  const missionClicked = () => {
    setCurrentTab("mission");
    console.log(currentTab);
  };

  const goalClicked = () => {
    setCurrentTab("goal");
    console.log(currentTab);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <section className="about pt-5 mt-5 section" id="about">
          <div className="row mt-5">
            <div className="col-md-6 col-lg-6 col-xl-6 mb-5 d-flex align-items-center">
              <div className="text-center w-100">
                <div className="flip-card mx-auto">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        className="mx-auto w-100"
                        src={IDTALogo}
                        alt="Avatar"
                        style={{
                          maxWidth: "300px",
                          maxHeight: "300px",
                        }}
                      />
                    </div>
                    <div className="flip-card-back">
                      <img
                        className="mx-auto w-100"
                        src={IDTALogo}
                        alt="Avatar"
                        style={{
                          maxWidth: "300px",
                          maxHeight: "300px",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-secondary border-0 mx-auto px-4 py-2 mt-5 shadow-none btn-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Register Now
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
              <div style={{ textAlign: "justify" }}>
                <h1 className="fw-bold">Who We Are</h1>
                <p className="text-secondary mt-0">
                  The IDTA is focused on advancing dental technology and
                  ensuring a prosperous future is secured for dental
                  technicians. We are seeking professional and enthusiastic
                  people to join our team by representing each State. If this
                  interests you, please contact us.
                </p>
                <hr />

                <div
                  className="text-center mx-auto w-100"
                  style={{ display: "inline-flex" }}
                >
                  <button
                    type="button"
                    onClick={visionClicked}
                    className="btn text-light text-center mx-auto w-100 fw-bold border-0"
                    style={
                      currentTab === "vision"
                        ? {
                            fontSize: "24px",
                            textDecoration: "underline",
                            textDecorationColor: "#2da3e3",
                          }
                        : { fontSize: "24px" }
                    }
                  >
                    Vision
                  </button>
                  &nbsp;&nbsp;
                  <button
                    type="button"
                    onClick={missionClicked}
                    className="btn text-light text-center mx-auto w-100 fw-bold border-0"
                    style={
                      currentTab === "mission"
                        ? {
                            fontSize: "24px",
                            textDecoration: "underline",
                            textDecorationColor: "#2da3e3",
                          }
                        : { fontSize: "24px" }
                    }
                  >
                    Mission
                  </button>
                  &nbsp;&nbsp;
                  <button
                    type="button"
                    onClick={goalClicked}
                    className="btn text-light text-center mx-auto w-100 fw-bold border-0"
                    style={
                      currentTab === "goal"
                        ? {
                            fontSize: "24px",
                            textDecoration: "underline",
                            textDecorationColor: "#2da3e3",
                          }
                        : { fontSize: "24px" }
                    }
                  >
                    Goal
                  </button>
                </div>

                <div className="w-100 mt-3 card card-body bg-dark">
                  {currentTab === "vision" ? (
                    <>
                      <ul>
                        <li>
                          To advance standard with Dental Technology for the
                          benefit of the oral healthcare of the nation.
                        </li>
                        <li>
                          Providing advice guidance and support to members.
                        </li>
                        <li>
                          Raising awareness and promoting and exchange to view
                          to key issues aff.
                        </li>
                      </ul>
                      <p>
                        The goal of the "Indian Dental Technician Association"
                        is to upload and improve the standards of dental
                        Technology providing state-of-the-art technological and
                        managerial education, providing a format for
                        professional and ethical growth, and creating lasting
                        fraternal relationships.
                      </p>
                    </>
                  ) : (
                    ""
                  )}
                  {currentTab === "mission" ? (
                    <>
                      <ul>
                        <li>
                          remaining essentially unchanged. It was popularised in
                          the 1960s with the release of Letraset sheets
                          containing
                        </li>
                        <li>
                          Lorem Ipsum passages, and more recently with desktop
                        </li>
                        <li>
                          publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum.
                        </li>
                      </ul>
                      <p>
                        remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                    </>
                  ) : (
                    ""
                  )}
                  {currentTab === "goal" ? (
                    <>
                      <ul>
                        <li>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                        </li>
                        <li>
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                        </li>
                        <li>
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into
                        </li>
                      </ul>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting,
                      </p>
                    </>
                  ) : (
                    ""
                  )}
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
                        <h5 className="text-secondary mb-3">
                          Laboratory Details
                        </h5>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                            placeholder="Lab Name"
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
                            placeholder="Website"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                            placeholder="Full Name of Lab Owner(s)"
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
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <h1>IDTA Future Projects</h1>
              <ul>
                <li>
                  {" "}
                  Our primary aim is to support the professional development of
                  dental technician and students.
                </li>
                <li>
                  We are planning to open semi-autonomous branches in all over
                  the india. Technician can access to technical knowledge in the
                  form of exclusive online, resources, journals and
                  master-classes.
                </li>
                <li>
                  I.D.T.A will support with career development, lifelong
                  learning, CPD requirements and training.
                </li>
                <li>
                  Access to exclusive discounted packages plus free CPD and
                  24-hour helpline for all members.
                </li>
                <li>
                  To mix and gain support from other experienced dental
                  technologists. I.D.T.A. is going to run by Dental technician
                  for dental technicians.
                </li>
                <li>
                  To promote your profession in society and raise awareness of
                  key points.
                </li>
              </ul>
            </div>
            <div className="col-12 mt-5">
              <h1>Key Objectives</h1>
              <ul>
                <li>
                  Develop and support members, and the dental technology
                  profession.
                </li>
                <li>Encourage and promote education, including CPD.</li>
                <li>Forge links with other organisations.</li>
                <li>
                  Promote views to relevant external organisation. Adopt and
                  share best practice.
                </li>
                <li>Provide benefits and employment opportunities.</li>
                <li>Develop and maintain roles and reponsibilities.</li>
              </ul>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
