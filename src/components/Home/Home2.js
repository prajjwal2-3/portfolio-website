import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        
          <Row md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              I'm a  
                <span className="primary-header"> Self-Taught Web Developer</span>
              {" "}
              who loves solving problems and building Websites.
              <br />
              <br />I am passionate about{" "}
              <span className="primary-header">technologies</span> and love to learn
              new things.
              <br />
              <br />I am more interested in building new
              <span>
                <span className="primary-header"> Web Technologies and Products.</span>
              </span>
              <br />
              <br />I always apply my experience in developing products with{" "}
              <span className="primary-header">Node.js</span> and Modern Javascript
              Library and Framework like
              <span className="primary-header"> React.js.</span>
              <br />
              <br />
              Currently expanding my portfolio by building more{" "}
              <span className="primary-header">projects </span>projects that I can add
              here.
            </p>
      
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/prajjwal2-3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="mailto:prajjwalbh25@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prajjwal-sharma-5700811b1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
