import React from "react";
// import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MembershipLogo from "../assets/img/membership.png";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import MembershipData from "../assets/jsonData/MembershipData.json";

const Membership = () => {
  return (
    <div>
      <Navbar />
      <section className="pt-4 section pb-0" id="about">
        <div className="row mt-5 m-0">
          <div
            className="col-md-4 col-lg-4 col-xl-4 my-0 d-flex align-items-center p-0"
            style={{ background: "#090909" }}
          >
            <img
              className="img-fluid mx-auto"
              src={MembershipLogo}
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
            className="col-md-8 col-lg-8 col-xl-8 my-0 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
            }}
          >
            <div className="container py-5">
              <h1 className="fw-bold text-success">Membership</h1>
              <p className="">
                The IDTA represent the best Interest of all Indian Dental
                technicians with one voice whether qualified or in training and
                providing life long learning opportunities, advice, guidance and
                Support to our members. We keep members up to date on all the
                important Information.our management team regularly meet and
                continually influence and raise the profile of dental technology
                with decision makers including regulators, educational provider
                and various group and we continue to be actively Involved In
                various National initiatives, consultations, Campaigns and
                activities.
              </p>
            </div>
          </div>
          <div
            className="col-12 my-0 p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#ffffff",
            }}
          >
            <h1 className="fw-bold text-dark my-3">Membership Packages</h1>
            <div className="row">
              {MembershipData.map((membershipItem, index) => (
                <div className="col-md-6 col-lg-6 col-xl-6 p-2 m-0">
                  <Link
                    className="text-decoration-none text-light"
                    to={"/membershipform/" + index}
                  >
                    <div
                      className="card card-body"
                      style={{
                        background: membershipItem.color,
                        minHeight: "170px",
                        borderRadius: "0",
                      }}
                    >
                      <div className="my-0 d-flex align-items-center">
                        <div className="text-start">
                          <h4 className="text-light">{membershipItem.title}</h4>
                          <h6 className="text-light">
                            Rs {membershipItem.amount} + Inclusive GST
                          </h6>
                          <p className="my-0">{membershipItem.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
            style={{
              background: "#090909",
            }}
          >
            <div className="container mb-0 pb-0">
              <div className="text-light mb-0 pb-0">
                <h1>Membership Benefits</h1>
                <ol>
                  <li>Members gets discounts on Dental Laboratory Products.</li>
                  <li>
                    Members gets discounts on CPD Courses, Hands on, and Online
                    Classes.
                  </li>
                  <li>Members get discounts on health insurances.</li>
                </ol>
                <h1>Terms and Conditions</h1>
                <ol className="mb-0 pb-0">
                  <li>
                    All members of the I.D.T.A agree to the I.D.T.A Membership
                    Terms and Conditions.
                  </li>
                  <li>
                    Membership is only open to individuals based in india only.
                  </li>
                  <li>
                    Membership payments are non-refundable. The subscription is
                    valid for 12 months from the date of registration. Members
                    can manage their membership subscription including annual
                    fee payments in their membership account by logging in.
                  </li>
                  <li>
                    Professional indemnity insurance, exclusive to I.D.T.A.
                    members only, is an optional opportunity to apply for
                    professional indemnity at a special discounted premium rate
                    through a third-party partner. The indemnity is not included
                    in the price of the I.D.T.A membership. If your I.D.T.A.
                    membership expires your professional indemnity insurance
                    will no longer be valid and a claim cannot be made.
                  </li>
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
            <img
              className="img-fluid w-100 h-100 py-0 my-0"
              src="https://images.pexels.com/photos/4065405/pexels-photo-4065405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
      </section>
      <Footer />
    </div>
  );
};

export default Membership;
