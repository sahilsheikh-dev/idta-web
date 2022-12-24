import React from "react";
import { Container } from "react-bootstrap";
import MembershipLogo from "../../assets/img/membership.jpg";

const Membership = () => {
  return (
    <Container>
      <section
        className="membership"
        id="membership"
        style={{ minHeight: "80vh" }}
      >
        <div className="row">
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
              <h1 className="fw-bold">
                <span className="text-custom-primary">Membership </span>
                Benefits
              </h1>
              <p className="text-secondary mt-3">
                The IDTA represent the best Interest of all Indian Dental
                technicians with one voice whether qualified or in training and
                providing life long learning opportunities, advice, guidance and
                Support to our members.
                <br />
                We keep members up to date on all the important Information.our
                management team regularly meet and continually influence and
                raise the profile of dental technology with decision makers
                including regulators, educational provider and various group and
                we continue to be actively Involved In various National
                initiatives, consultations, Campaigns and activities.
              </p>
              <h4 className="text-light">Discounts</h4>
              <ul className="text-secondary">
                <li>Members gets discounts on Dental Laboratory Products.</li>
                <li>
                  Members gets discounts on CPD Courses, Hands on, and Online
                  Classes.
                </li>
              </ul>
              <h4 className="text-light mt-2">Communication,</h4>
              <p className="text-secondary mt-3">
                Dental Technology is in exciting times with the rapid
                developments of digital dental technology. We regularly
                communicate to the IDTA membership through our F-mall
                newsletter, social media and the IDTA website (Launching soon)
                to highlight important information and keep members up to date
                with what is going on in dental technology.
              </p>
              <h4 className="text-light mt-2">Support,</h4>
              <p className="text-secondary mt-3">
                Being part of the IDTA community gives members access to a
                wealth of information, advice sheets and guidance documents on a
                variety of topics within the members area of the IDTA website
                including; regulatory Updates and requirements, technical,
                templates and business management. Not only that, the IDTA
                office and support team are there to Help you with your
                enquiries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Membership;
