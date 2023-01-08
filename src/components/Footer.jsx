import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

export default function Footer() {
  return (
    <div className=" text-white mt-auto footer-color-fondo  py-4">
      <Container>
        <Row className="align-items-center" style={{ minHeight: "6rem" }}>
          <Col className="d-none d-md-block" md="4">
            <Image src={logo} alt="logo" style={{ height: "2rem" }} />
          </Col>

          <Col
            className="d-flex flex-column align-items-center mb-3 mb-md-0"
            md="4"
          >
            <a
              className="d-flex justify-content-center mb-2 text-decoration-none"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MartinGramajo"
            >
              <img className="me-4" src={github} alt="logo github" />
              <h5 className="mb-0"> Github</h5>
            </a>
            <a
              className="d-flex justify-content-center text-decoration-none"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/martin-gramajo-20740a221/"
            >
              <img className="me-4" src={linkedin} alt="logo link" />
              <h5 className="mb-0">linkedIn</h5>
            </a>
          </Col>

          <Col className="text-center text-md-end" md="4">
            <h5 className="text-white mb-2">Copyright Mago®</h5>
            <h5 className="text-white mb-0">Tucumán - Argentina 2022</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
