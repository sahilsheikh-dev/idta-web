import React from "react";
import { GeoAltFill, TelephoneFill } from "react-bootstrap-icons";
import IDTALogo from "../../assets/img/idta-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer navbar mt-0">
        <div className="container w-100">
          <div className="row my-0 w-100">
            <div className="col-md-3 col-lg-3 col-xl-3 text-start offset-md-2 offset-lg-2 offset-xl-2 mb-5">
              <img
                className="my-3"
                src={IDTALogo}
                style={{ maxWidth: "120px" }}
                alt="logo"
              />
              <div className="row">
                <div className="col-1">
                  <a
                    href="https://facebook.com"
                    className="text-decoration-none"
                  >
                    <img
                      className="img-thumbnail bg-transparent mx-1 border-0"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
                      alt="logo"
                      style={{ maxWidth: "30px" }}
                    />
                  </a>
                </div>
                <div className="col-1">
                  <a
                    href="https://instagram.com"
                    className="text-decoration-none"
                  >
                    <img
                      className="img-thumbnail bg-transparent mx-1 border-0"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png"
                      alt="logo"
                      style={{ maxWidth: "30px" }}
                    />
                  </a>
                </div>
                <div className="col-1">
                  <a
                    href="https://twitter.com"
                    className="text-decoration-none"
                  >
                    <img
                      className="img-thumbnail bg-transparent mx-1 border-0"
                      src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png"
                      alt="logo"
                      style={{ maxWidth: "30px" }}
                    />
                  </a>
                </div>
                <div className="col-1">
                  <a
                    href="https://linkedin.com"
                    className="text-decoration-none"
                  >
                    <img
                      className="img-thumbnail bg-transparent mx-1 border-0"
                      src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                      alt="logo"
                      style={{ maxWidth: "30px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 text-start mb-5">
              <h4 className="fw-bold">Quick Links</h4>
              <a
                className="text-decoration-none text-secondary footer-link a-hover"
                href="#about"
              >
                About
              </a>{" "}
              <br />
              <a
                className="text-decoration-none text-secondary footer-link a-hover"
                href="#services"
              >
                Services
              </a>{" "}
              <br />
              <a
                className="text-decoration-none text-secondary footer-link a-hover"
                href="#membership"
              >
                Membership Benefits
              </a>{" "}
              <br />
              <a
                className="text-decoration-none text-secondary footer-link a-hover"
                href="#education"
              >
                Education
              </a>{" "}
              <br />
              <a
                className="text-decoration-none text-secondary footer-link a-hover"
                href="#careers"
              >
                Careers
              </a>{" "}
              <br />
              <a
                className="text-decoration-none text-secondary footer-link a-hover"
                href="#joinus"
              >
                Join Us
              </a>{" "}
              <br />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 text-start">
              <h4 className="fw-bold">Contact Us</h4>
              <a
                className="text-decoration-none text-secondary footer-link a-hover"
                href="https://goo.gl/maps/zvJd7KM1Uv5oyqB38"
              >
                <GeoAltFill />
                &nbsp;Industrial Digital Twin Association e. V. Lyoner Straße 18
                60528 Frankfurt am Main Germany
              </a>
              <br />
              <a
                className="text-decoration-none text-secondary footer-link a-hover"
                href="tel:+91 0123456789"
              >
                <TelephoneFill />
                &nbsp;+91 0123456789
              </a>
              <br />
              <a
                className="text-decoration-none text-secondary footer-link a-hover"
                href="mailto:contactus@idta.com"
              >
                <span className="text-secondary fw-bold">@</span>
                &nbsp;contactus@idta.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
