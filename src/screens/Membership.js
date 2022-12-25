import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MembershipLogo from "../assets/img/membership.jpg";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import MembershipData from "../assets/jsonData/MembershipData.json";

const Membership = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <section
          className="membership pt-5 mt-5"
          id="membership"
          style={{ minHeight: "80vh" }}
        >
          <div className="row mt-5">
            <div className="col-md-4 col-lg-4 col-xl-4 mb-5 d-flex align-items-center">
              <div className="text-center mx-auto">
                <img
                  className="img-fluid w-100 mx-auto"
                  src={MembershipLogo}
                  alt="logo"
                />
              </div>
            </div>
            <div className="col-md-8 col-lg-8 col-xl-8 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5">
              <div>
                <h1 className="fw-bold">Membership</h1>
                <p className="text-secondary mt-3">
                  The IDTA represent the best Interest of all Indian Dental
                  technicians with one voice whether qualified or in training
                  and providing life long learning opportunities, advice,
                  guidance and Support to our members.
                  <br />
                  We keep members up to date on all the important
                  Information.our management team regularly meet and continually
                  influence and raise the profile of dental technology with
                  decision makers including regulators, educational provider and
                  various group and we continue to be actively Involved In
                  various National initiatives, consultations, Campaigns and
                  activities.
                </p>
                <hr />
                <h1 className="fw-bold">Membership Packages</h1>
                <div className="row">
                  {MembershipData.map((membershipItem, index) => (
                    <div className="col-md-6 col-lg-6 col-xl-6 p-2 m-0">
                      <Link
                        className="text-decoration-none text-light"
                        to={"/membershipform/" + index}
                      >
                        <div
                          className="card card-body"
                          style={{ background: membershipItem.color }}
                        >
                          <div className="my-0 d-flex align-items-center">
                            <div className="text-start">
                              <h4 className="text-light">
                                {membershipItem.title}
                              </h4>
                              <h6 className="text-light">
                                Rs {membershipItem.amount} +GST
                              </h6>
                              <p className="my-0">
                                {membershipItem.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}

                  {/* <div className="col-md-6 col-lg-6 col-xl-6 p-2 m-0">
                    <Link
                      className="text-decoration-none text-light"
                      to={"/membershipform/2000"}
                    >
                      <div
                        className="card card-body"
                        style={{ background: "#525bc2" }}
                      >
                        <div className="my-0 d-flex align-items-center">
                          <div className="text-start">
                            <h4 className="text-light">
                              Laboratory Membership
                            </h4>
                            <h6 className="text-light">Rs 2000 +GST</h6>
                            <p className="my-0">
                              A Dental laboratory whose services are exclusively
                              available to member of the dental profession.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6 p-2 m-0">
                    <Link
                      className="text-decoration-none text-light"
                      to={"/membershipform/2000"}
                    >
                      <div
                        className="card card-body"
                        style={{ background: "#ff0080" }}
                      >
                        <div className="my-0 d-flex align-items-center">
                          <div className="text-start">
                            <h4 className="text-light">Associate Membership</h4>
                            <h6 className="text-light">Rs 2000 +GST</h6>
                            <p className="my-0">
                              An Associate member small include a Dental
                              laboratory supplier, a manufacturer representative
                              or Dental Technology instructor who does not
                              qualify for "Technician Membership.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6 p-2 m-0">
                    <Link
                      className="text-decoration-none text-light"
                      to={"/membershipform/1000"}
                    >
                      <div
                        className="card card-body"
                        style={{ background: "#37bd6e" }}
                      >
                        <div className="my-0 d-flex align-items-center">
                          <div className="text-start">
                            <h4 className="text-light">Student Membership</h4>
                            <h6 className="text-light">Rs 1000 +GST</h6>
                            <p className="my-0">
                              A Dental technician student in a Dental collage or
                              in a institute can be registered as IDTA Member.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-light">Membership Benefits</h4>
              <ul className="text-secondary">
                <li>Members gets discounts on Dental Laboratory Products.</li>
                <li>
                  Members gets discounts on CPD Courses, Hands on, and Online
                  Classes.
                </li>
                <li>Members get discounts on health insurances.</li>
              </ul>
              <h4 className="text-light mt-2">Terms and Conditions</h4>
              <ul className="text-secondary">
                <li>
                  All members of the I.D.T.A agree to the I.D.T.A Membership
                  Terms and Conditions.
                </li>
                <li>
                  Membership is only open to individuals based in india only.
                </li>
                <li>
                  Membership payments are non-refundable. The subscription is
                  valid for 12 months from the date of registration. Members can
                  manage their membership subscription including annual fee
                  payments in their membership account by logging in.
                </li>
                <li>
                  Professional indemnity insurance, exclusive to I.D.T.A.
                  members only, is an optional opportunity to apply for
                  professional indemnity at a special discounted premium rate
                  through a third-party partner. The indemnity is not included
                  in the price of the I.D.T.A membership. If your I.D.T.A.
                  membership expires your professional indemnity insurance will
                  no longer be valid and a claim cannot be made.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Membership;
