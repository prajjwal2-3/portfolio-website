import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";
import ExpenseTracker from "../../Assets/Projects/ExpenseTracker.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="EDhaba"
              description="This is a fully functional eRestaurant website that uses React.js + MUI + TailwindCSS in the front end. It relies on Swiggy's Original API for restaurant info and redux toolkit for state management."
              ghLink="https://github.com/prajjwal2-3/Edhaba-prod.git"
              demoLink="https://edhaba-prod.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="MovieGPT"
              description="MovieGPT is a website that uses chatgpt's intelligence to recommend you movies according to given prompt."
              ghLink="https://github.com/prajjwal2-3/moviegpt.git"
              demoLink="https://moviegpt-eight.vercel.app/login"
            />
          </Col>
         

          
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
