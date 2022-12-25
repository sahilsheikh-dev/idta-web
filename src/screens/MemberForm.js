import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import MembershipData from "../assets/jsonData/MembershipData.json";

const MemberForm = () => {
  const { membershipIndex } = useParams({});
  const membershipPlan = MembershipData[membershipIndex];

  return (
    <div>
      <Navbar />
      <Container>
        <section className="about pt-5 mt-5 section" id="about">
          <div className="row mt-5">
            <h1 className="fw-bold">Purchase Membership</h1>
            <hr />
            <h5>Plan: {membershipPlan.title}/-</h5>
            <h5>Price: {membershipPlan.amount}/-</h5>
            <hr />
            <div className="modal-body">
              <div>
                <h6>Laboratory Details:</h6>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                    placeholder="Telephone Number"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                    placeholder="Fax Number"
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
                  <label className="mb-2">
                    Are you registered with the IDTA?
                  </label>
                  <br />
                  <input type="radio" id="yes-registered" name="registered" />
                  <label for="yes-registered">YES</label>
                  <br />
                  <input type="radio" id="not-registered" name="registered" />
                  <label for="not-registered">NO</label>
                </div>
                <div className="mb-3">
                  <label className="mb-2">Date Lab Established:</label>
                  <input
                    type="date"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                    placeholder="Full Name of Laboratory Owner(s)"
                  />
                </div>
                <div className="mb-3">
                  <select class="form-select bg-transparent text-light">
                    <option selected disabled style={{ background: "#000000" }}>
                      Type of Work Carried Out On Premises
                    </option>
                    <option style={{ background: "#000000" }} value="Implants">
                      Implants
                    </option>
                    <option
                      style={{ background: "#000000" }}
                      value="Mouthguards Crown"
                    >
                      Mouthguards Crown
                    </option>
                    <option
                      style={{ background: "#000000" }}
                      value="Orthodontics"
                    >
                      Orthodontics
                    </option>
                    <option
                      style={{ background: "#000000" }}
                      value="Prosthetics"
                    >
                      Prosthetics
                    </option>
                    <option style={{ background: "#000000" }} value="Implants">
                      Chromes
                    </option>
                    <option
                      style={{ background: "#000000" }}
                      value="Maxillofacial"
                    >
                      Maxillofacial
                    </option>
                    <option
                      style={{ background: "#000000" }}
                      value="& Bridge Other"
                    >
                      & Bridge Other
                    </option>
                    <option
                      style={{ background: "#000000" }}
                      value="Please Specify"
                    >
                      Please Specify
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <select class="form-select bg-transparent text-light">
                    <option selected disabled style={{ background: "#000000" }}>
                      Types of Services
                    </option>
                    <option style={{ background: "#000000" }} value="ECHS Only">
                      ECHS Only
                    </option>
                    <option
                      style={{ background: "#000000" }}
                      value="Private Only"
                    >
                      Private Only
                    </option>
                    <option style={{ background: "#000000" }} value="Mix">
                      Mix
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <select class="form-select bg-transparent text-light">
                    <option selected disabled style={{ background: "#000000" }}>
                      Staff Profile Please Specify the Number of
                    </option>
                    <option
                      style={{ background: "#000000" }}
                      value="Lab Assistant(s)"
                    >
                      Lab Assistant
                    </option>
                    <option style={{ background: "#000000" }} value="Trainee">
                      Trainee
                    </option>
                    <option
                      style={{ background: "#000000" }}
                      value="Others (Drivers, Admin Staff etc.)"
                    >
                      Others {"("}Drivers, Admin Staff etc.{")"}
                    </option>
                  </select>
                  <input
                    type="text"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                    placeholder="Total"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                    placeholder="Name of Registered Technician(s)"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                    placeholder="Registration Number"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-transparent shadow-none border-top-0 border-start-0 border-end-0 p-2"
                    placeholder="Registration Date"
                  />
                </div>
              </div>
            </div>
            <a
              href="/dashboard"
              type="button"
              className="btn btn-primary text-decoration-none"
            >
              Purchase
            </a>
            {/* <button type="button" className="btn btn-primary">
              Purchase
            </button> */}
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default MemberForm;
