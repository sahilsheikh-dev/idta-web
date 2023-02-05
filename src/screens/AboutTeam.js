import React from "react";
// import { Container } from "react-bootstrap";
// import IDTALogo from "../assets/img/idta-logo.png";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import TeamData from "../assets/jsonData/teamInfo.json";

const AboutTeam = () => {
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
              <h3 className="fw-bold text-success">AWARD WINNING</h3>
              <h1 className="fw-bold">MEET THE TEAM</h1>
            </div>
          </div>
          {TeamData?.map((teamItem, index) =>
            index % 2 === 0 ? (
              <>
                <div
                  className="col-md-6 col-lg-6 col-xl-6 my-0 d-flex align-items-center p-2 p-md-5 p-lg-5 p-xl-5"
                  style={{
                    background: "#090909",
                  }}
                >
                  <div className="container">
                    <div className="text-light">
                      <h1>{teamItem.name}</h1>
                      <h3 className="fw-bold text-success">
                        {teamItem.position}
                      </h3>
                      <p>{teamItem.info}</p>
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
                      className="img-fluid h-100 py-0 my-0"
                      src={teamItem.profile}
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
              </>
            ) : (
              <>
                <div
                  className="col-md-6 col-lg-6 col-xl-6 my-0 p-0 my-0"
                  style={{
                    background: "#090909",
                  }}
                >
                  <div className="text-center">
                    <img
                      className="img-fluid h-100 py-0 my-0"
                      src={teamItem.profile}
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
                      <h1>{teamItem.name}</h1>
                      <h3 className="fw-bold text-success">
                        {teamItem.position}
                      </h3>
                      <p>{teamItem.info}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutTeam;
