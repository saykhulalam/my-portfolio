import "../contact/Contact.css";
import '../contact/Contact-responsive.css'
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} sm={12} md={12}>
              <div className="input-box">
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Your website (If exists)" />
                <input
                  className="msg"
                  type="text"
                  placeholder="How can I help?*"
                />
                <Row>
                  <Col lg={6} sm={12}  md={12}>
                    <button className="contact-btn">Get In Touch</button>
                  </Col>
                  <Col lg={6} sm={12}  md={12} className="d-flex justify-content-end">
                    <div className="contact-i">
                      <div className="c-box">
                        <FaFacebook className="ci" />
                      </div>
                      <div className="c-box">
                        <AiFillInstagram className="ci" />
                      </div>
                      <div className="c-box">
                        <FaLinkedin className="ci" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6} sm={12}  md={12}>
              <div className="text-side">
                <h2>
                  Let’s <span>talk</span> for <br /> Something special
                </h2>
                <p>
                  I seek to push the limits of creativity to create
                  high-engaging, <br /> user-friendly, and memorable interactive
                  experiences.
                </p>
                <h3>
                  <MdEmail className="email" />
                  saykhulalam@gmail.com
                </h3>
                <h4>
                  <IoCall className="call" />
                  01966266966
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
