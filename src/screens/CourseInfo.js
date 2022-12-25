import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../components/commons/Footer";
import CourseData from "../assets/jsonData/CourseData.json";
import Navbar from "../components/commons/Navbar";
import TempVideo from "../assets/videos/temp-video.mp4";

const CourseInfo = () => {
  const { courseID } = useParams({});
  const courseSrc = CourseData[courseID];
  const courseContent = CourseData[courseID].content;
  const [currentVideoSrc, setCurrentVideoSrc] = useState(
    courseContent[0].videoURL
  );
  const setVideo = (index) => {
    setCurrentVideoSrc(courseContent[index].videoURL);
    console.log(currentVideoSrc);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <section className="about pt-5 mt-5 section" id="about">
          <div className="row mt-5">
            <h1 className="fw-bold">{courseSrc.title}</h1>
            <h6>{courseSrc.description}</h6>
            <hr />
            <div className="row">
              <div className="col-md-8 col-lg-8 col-xl-8">
                {/* <img src={currentVideoSrc} className="img-fluid" /> */}
                <video className="w-100" controls controlsList="nodownload">
                  <source src={TempVideo} type="video/mp4" />
                  {/* <source src={currentVideoSrc} type="video/mp4" /> */}
                  Your browser does not support HTML video.
                </video>
              </div>
              <div
                className="col-md-4 col-lg-4 col-xl-4 border-start"
                style={{ height: "100%", overflowY: "auto" }}
              >
                <h4 className="mx-2">Index</h4>
                <hr />
                <ul>
                  {courseContent.map((courseContentItem, index) => (
                    <div key={index}>
                      <li>
                        <button
                          className="btn shadow-none border-0 text-light"
                          onClick={() => setVideo(index)}
                        >
                          {courseContentItem.videoTitle}
                        </button>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default CourseInfo;
