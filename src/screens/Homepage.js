import React from "react";
import About from "../components/HomePage/About";
import Careers from "../components/HomePage/Careers";
import Education from "../components/HomePage/Education";
import Footer from "../components/commons/Footer";
import Hero from "../components/HomePage/Hero";
import JoinUs from "../components/HomePage/JoinUs";
import Membership from "../components/HomePage/Membership";
import Navbar from "../components/commons/Navbar";
import Services from "../components/HomePage/Services";

const Homepage = () => {
  const heroSection = document.getElementById("hero");
  const aboutSection = document.getElementById("about");
  const membershipSection = document.getElementById("membership");
  const servicesSection = document.getElementById("services");
  const educationSection = document.getElementById("education");
  const careersSection = document.getElementById("careers");
  const joinusSection = document.getElementById("joinus");

  return (
    <div>
      <Navbar
        heroSection={heroSection}
        aboutSection={aboutSection}
        membershipSection={membershipSection}
        servicesSection={servicesSection}
        educationSection={educationSection}
        careersSection={careersSection}
        joinusSection={joinusSection}
      />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="membership">
        <Membership />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="careers">
        <Careers />
      </section>
      <section id="joinus">
        <JoinUs />
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
