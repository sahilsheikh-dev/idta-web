import React from "react";
import About from "../components/About";
import Careers from "../components/Careers";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import JoinUs from "../components/JoinUs";
import Membership from "../components/Membership";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Membership />
      <Education />
      <Careers />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Homepage;
