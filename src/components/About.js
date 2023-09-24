import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/Portfolio_Headshot.png";
import "../style/About.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card></Card>

            <Card.Body>
                <Card.Title className="text-center mb-4">
                  About Thomas Calle
                </Card.Title>
                <Card.Text>
                  Yago Lira, 31 year old, Brazilian, first time learning about Web Development, I have university from Brazil of business administration. My dream is be a Full Stack Developer Coding.
                </Card.Text>
                <Card.Text>
                  Now Im working by construction, hard time to study but I find the best way to change de life.
                </Card.Text>
              </Card.Body>