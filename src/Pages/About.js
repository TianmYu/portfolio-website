import logo from '../logo.svg';
import Socials from '../Components/Socials'
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <Container fluid={true} className="homepage-format">
          <Socials />
          <Row className="homepage-intro-box">
            <Col className="min-w-280">
              <a id="home"> </a>
              <div className="text-outer">
                <div className="text-inner-homepage">
                  <h1 className="left-align">
                    Hi, my name is Tian
                  </h1>
                  <p className="left-align large-font">
                    Im gonna put some placeholder "about me" stuff here, just write it in like 1 day
                  </p>
                </div>
              </div>
            </Col>
            {/* <Col className="col-4 min-w-280 mx-auto">
              <div className="text-outer">
                <div className="text-inner">
                <Image src="https://placehold.co/600x400" fluid rounded />
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
    )
}