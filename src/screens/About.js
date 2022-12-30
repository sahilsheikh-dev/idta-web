import React, { useState } from "react";
// import { Container } from "react-bootstrap";
// import IDTALogo from "../assets/img/idta-logo.png";
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
      <section className="pt-4 section pb-0" id="about">
        <div className="row mt-5 m-0">
          <div className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-0">
            <img
              className="img-fluid w-100"
              src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="logo"
              style={{
                maxWidth: "100%",
                maxHeight: "330px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
            }}
          >
            <div className="container py-5">
              <h3 className="fw-bold text-success">WHO IS THE IDTA?</h3>
              <h1 className="fw-bold">MORE ABOUT US</h1>
              <ol className="text-light mt-0">
                <li>
                  The IDTA is focused on advancing dental technology and
                  ensuring a prosperous future is secured for dental
                  technicians.
                </li>
                <li>
                  We are seeking professional and enthusiastic people to join
                  our team by representing each State. If this interests you,
                  please contact us.
                </li>
              </ol>
            </div>
          </div>
          <div
            className="col-12 my-0 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5 my-0"
            style={{
              background: "#090909",
            }}
          >
            <div className="container py-0 my-0">
              <div
                className="text-center w-100 bg-dark"
                style={{ display: "inline-flex" }}
              >
                <button
                  type="button"
                  onClick={visionClicked}
                  className="btn text-light text-center w-100 fw-bold border-0"
                  style={
                    currentTab === "vision"
                      ? {
                          fontSize: "24px",
                          background: "#2da3e3",
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
                  className="btn text-light text-center w-100 fw-bold border-0"
                  style={
                    currentTab === "mission"
                      ? {
                          fontSize: "24px",
                          background: "#2da3e3",
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
                  className="btn text-light text-center w-100 fw-bold border-0"
                  style={
                    currentTab === "goal"
                      ? {
                          fontSize: "24px",
                          background: "#2da3e3",
                        }
                      : { fontSize: "24px" }
                  }
                >
                  Goal
                </button>
              </div>
              <div className="w-100 mt-3 text-light">
                {currentTab === "vision" ? (
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <img
                        className="img-fluid mx-auto w-100 h-100"
                        src="https://images.pexels.com/photos/262438/pexels-photo-262438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="logo"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
                      <p style={{ fontSize: "22px" }}>
                        <ol>
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
                        </ol>
                        <p>
                          The goal of the "Indian Dental Technician Association"
                          is to upload and improve the standards of dental
                          Technology providing state-of-the-art technological
                          and managerial education, providing a format for
                          professional and ethical growth, and creating lasting
                          fraternal relationships.
                        </p>
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {currentTab === "mission" ? (
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <img
                        className="img-fluid mx-auto w-100 h-100"
                        src="https://images.pexels.com/photos/15812/bull-center-bulls-eye-darts-15812.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="logo"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
                      <p style={{ fontSize: "22px" }}>
                        <ol>
                          <li>
                            remaining essentially unchanged. It was popularised
                            in the 1960s with the release of Letraset sheets
                            containing
                          </li>
                          <li>
                            Lorem Ipsum passages, and more recently with desktop
                          </li>
                          <li>
                            publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                          </li>
                        </ol>
                        <p>
                          remaining essentially unchanged. It was popularised in
                          the 1960s with the release of Letraset sheets
                          containing Lorem Ipsum passages, and more recently
                          with desktop publishing software like Aldus PageMaker
                          including versions of Lorem Ipsum. It has survived not
                          only five centuries
                        </p>
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {currentTab === "goal" ? (
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <img
                        className="img-fluid mx-auto w-100 h-100"
                        src="https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="logo"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
                      <p style={{ fontSize: "22px" }}>
                        <ol>
                          <li>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                          </li>
                          <li>
                            industry's standard dummy text ever since the 1500s,
                            when
                          </li>
                          <li>
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries
                          </li>
                        </ol>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries
                        </p>
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 p-0 my-0"
            style={{
              background: "#090909",
            }}
          >
            <div className="text-center">
              <img
                className="img-fluid w-100 h-100 py-0 my-0"
                src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="logo"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
            }}
          >
            <div className="container">
              <div className="text-light">
                <h1>IDTA Future Projects</h1>
                <ol>
                  <li>
                    Our primary aim is to support the professional development
                    of dental technician and students.
                  </li>
                  <li>
                    We are planning to open semi-autonomous branches in all over
                    the india. Technician can access to technical knowledge in
                    the form of exclusive online, resources, journals and
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
                </ol>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
            }}
          >
            <div className="container">
              <div className="mt-5 text-light">
                <h1>Key Objectives</h1>
                <ol>
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
                </ol>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 p-0 my-0"
            style={{
              background: "#090909",
            }}
          >
            <div className="text-center">
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
          </div>
        </div>
      </section>
      {/* <Container>
        <>
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
                  <h5 className="text-secondary mb-3">Laboratory Details</h5>
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
                  <button type="button" className="btn btn-primary btn-sm">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
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
          </div>
        </>
      </Container> */}
      <Footer />
    </div>
  );
};

export default About;
