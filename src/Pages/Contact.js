import logo from '../logo.svg';
import Socials from '../Components/Socials'
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {ReactComponent as FacebookLogo} from "../Assets/facebook-social-logo.svg"
import {ReactComponent as GithubLogo} from "../Assets/GitHub-logo.svg"
import {ReactComponent as LinkedinLogo} from "../Assets/linkedin-logo.svg"

const ContactBubbles = (logo, link, text) => {
  return(
    <div>
      <a href={link}>
      <div className="socials-container">
        <div className="contact-bubble" >
            <div className="text-outer center-flex">
                <div className="text-inner-socials">
                {logo}
                </div>
            </div>
        </div>
        <h3 className="borderless"> {text} </h3>
      </div>
      </a>
    </div>
  )
}

export default function Contact() {
  let Linkedin = <LinkedinLogo
    fill='#0E1428' // TODO: load this from CSS variable declaration
    style={{
        height:30,
        width:30,
    }}/>
  let LinkedinLink = "https://www.linkedin.com/in/tian-miao-yu/"
  let Github = <GithubLogo
    fill='#0E1428'
    style={{
        height:30,
        width:30,
    }}/>
  let GithubLink = "https://github.com/TianmYu"
  let Facebook = <FacebookLogo
    fill='#0E1428'
    style={{
        height:30,
        width:30,
    }}/>
  let FacebookLink = "https://www.facebook.com/tian.yu.3975"

  return (
    <Container fluid={true} className="homepage-format">
      <Row className="homepage-intro-box">
        <Col className="col-3 min-w-230">
          <a id="home"> </a>
          <div className="text-outer">
            <div className="text-inner-homepage">
              {ContactBubbles(Linkedin, LinkedinLink, "Linkedin")}
              {ContactBubbles(Github, GithubLink, "Github")}
              {ContactBubbles(Facebook, FacebookLink, "Facebook")}
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