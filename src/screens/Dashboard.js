import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import Users from "../lib/Users";
import CoursesAvailable from "../lib/CoursesAvailable";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [courseData, setCourseData] = useState([]);

  const getUser = async (currentUserPrimaryKey) => {
    Users.getUser(currentUserPrimaryKey)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log("Error logging in:", error);
        alert("Error logging in:" + error);
      });
  };

  const redirectToLogin = () => {
    window.location.replace("login");
  };

  useEffect(() => {
    setCurrentUser(localStorage.getItem("currentUser"));
    if (
      currentUser === null ||
      currentUser === "" ||
      currentUser === undefined
    ) {
      console.log("please login");
    } else {
      getUser(currentUser);

      const getPurchasedCoursesDetails = async (currentUser) => {
        CoursesAvailable.getPurchasedCoursesByUserPrimaryKey(currentUser)
          .then((response) => {
            console.log(response.data);
            setCourseData(response.data);
          })
          .catch((error) => {
            console.log("Error: " + error);
            alert("Error: " + error);
          });
      };

      getPurchasedCoursesDetails(currentUser);
    }
    // eslint-disable-next-line
  }, [currentUser]);

  return (
    <div>
      <Navbar />
      <Container>
        {localStorage.getItem("currentUser") === null ||
        localStorage.getItem("currentUser") === "" ||
        localStorage.getItem("currentUser") === undefined ? (
          redirectToLogin()
        ) : (
          <>
            <section
              className="about pt-5 mt-5 section"
              id="about"
              style={{
                minHeight: "90vh",
              }}
            >
              <div className="row mt-5">
                <h1 className="fw-bold">Welcome, {userInfo.name}</h1>
                <h6>Membership Expires On: 19/08/2023</h6>
                <hr />
                <h4 className="mt-4 fw-bold">Current Available Courses</h4>
                <div className="row">
                  {courseData.length === 0 ? (
                    <>
                      <h4 className="text-center">
                        You haven't Purchased any Courses
                      </h4>
                      <a
                        className="text-center text-decoration-none"
                        href="/courses"
                      >
                        Click here to Purchase the Courses
                      </a>
                    </>
                  ) : (
                    courseData?.map((courseItem, index) => (
                      <div
                        className="col-md-4 col-lg-4 col-xl-4 my-3"
                        key={index}
                      >
                        <Link
                          to={"/course/" + courseItem.coursePrimaryKey}
                          className="text-decoration-none text-dark"
                        >
                          <div className="card bg-dark">
                            <img
                              src={courseItem.courseImageUrl}
                              className="card-img-top"
                              alt="logo"
                            />
                            <div className="card-body bg-light text-dark">
                              <h4 className="card-title text-danger">
                                Now Available
                              </h4>
                              <h6 className="card-title text-danger">
                                {courseItem.courseStartDate}
                              </h6>
                              <p className="card-text">
                                {courseItem.courseShortDescription}
                              </p>
                              <p className="text-decoration-none text-dark text-center">
                                Book Your Place Now!
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </section>
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;
