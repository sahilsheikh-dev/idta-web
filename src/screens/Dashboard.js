import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import CourseData from "../assets/jsonData/CourseData.json";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <section className="about pt-5 mt-5 section" id="about">
          <div className="row mt-5">
            <h1 className="fw-bold">Welcome, Devanshu Kumar</h1>
            <h6>Membership Expires On: 19/08/2023</h6>
            <hr />
            <h4 className="mt-4 fw-bold">Current Available Courses</h4>
            <div className="row">
              {CourseData.length === 0 ? (
                <h4>No Course Available</h4>
              ) : (
                CourseData.map((courseItem, index) => (
                  <div className="col-md-3 col-lg-3 col-xl-3 my-3" key={index}>
                    <div className="card bg-dark">
                      <img
                        src={courseItem.imageURL}
                        className="card-img-top"
                        alt="logo"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{courseItem.title}</h5>
                        <p className="card-text">
                          {courseItem.shortDescription}
                        </p>
                        <Link
                          to={"/course/" + index}
                          // to={"/course/" + courseItem.courseID}
                          className="btn btn-primary w-100"
                        >
                          Start Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;
