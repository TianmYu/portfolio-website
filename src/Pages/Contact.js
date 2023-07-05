import logo from '../logo.svg';
import Socials from '../Components/Socials'
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {ReactComponent as FacebookLogo} from "../Assets/facebook-social-logo.svg"
import {ReactComponent as GithubLogo} from "../Assets/GitHub-logo.svg"
import {ReactComponent as LinkedinLogo} from "../Assets/linkedin-logo.svg"

const ContactBubbles = () => {
  return(
    <div>
      <a href="https://www.linkedin.com/in/tian-miao-yu/">
      <div className="socials-container">
        <div className="contact-bubble" >
            <div className="text-outer center-flex">
                <div className="text-inner-socials">
                <LinkedinLogo
                fill='#0E1428' // TODO: load this from CSS variable declaration
                style={{
                    height:30,
                    width:30,
                }}/>
                </div>
            </div>
        </div>
        <h2 className="borderless"> Linkedin </h2>
      </div>
      </a>
    <div>
      <a  href="https://github.com/TianmYu">
      <div className="socials-container">
        <div className="contact-bubble" >
            <div className="text-outer center-flex">
                <div className="text-inner-socials">
  
                    <GithubLogo
                    fill='#0E1428'
                    style={{
                        height:30,
                        width:30,
                    }}/>
                    </div>
            </div>
        </div>
        <h2 className="borderless"> Github </h2>
      </div>
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/tian.yu.3975">
      <div className="socials-container">
        <div className="contact-bubble" >
            <div className="text-outer center-flex">
              <div className="text-inner-socials">
                  
                  <FacebookLogo
                  fill='#0E1428'
                  style={{
                      height:30,
                      width:30,
                  }}/>
                </div>
            </div>
        </div>
        <h2 className="borderless"> Facebook </h2>
      </div>
      </a>
    </div>
  </div>
  )
}

export default function Contact() {
    return (
        <Container fluid={true} className="homepage-format">
          <Row className="homepage-intro-box">
            <Col className="col-3 min-w-230">
              <a id="home"> </a>
              <div className="text-outer">
                <div className="text-inner-homepage">
                  {ContactBubbles()}
                </div>
              </div>
            </Col>
            <Col>
              <div className="text-outer">
                <div className="vertical-divider"></div>
                <div className="text-inner-homepage left-align large-font"> 
                  <div>
                    Send me an email (no spam please!)
                  </div>
                  <div>
                    <a href={'mailto:tianmyu2000@gmail.com'}>
                    Tianmyu2000@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
            </Col>
          </Row>
        </Container>
    )
}