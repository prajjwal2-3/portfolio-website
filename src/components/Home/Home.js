import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeIcon from "../../Assets/homeicons.svg";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Projects from "../Projects/Projects";
import Home2 from "./Home2";
import Type from "./Type";
import "./home.css";
import Techstack from "../About/Techstack";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I'M
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">Prajjwal Sharma</strong>
              </h1>

              <div style={{ padding: 30 }} className="type">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeIcon}
                alt="home pic"
                className="img-fluid"
                style={{ paddingTop: 50 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <h1 data-aos="fade-right">
          <span className="primary-header">Skillset</span> I Work With
        </h1>
      <Techstack/>
      <Projects/>
      <Home2 />
      <ScrollToTop />
    </section>
  );
}

export default Home;
