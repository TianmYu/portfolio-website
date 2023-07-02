import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Timeline from '../Components/Timeline';
import Drawer from '../Components/SlideDrawer';
import Backdrop from '../Components/Backdrop';

import {Test1, Test2} from '../TimelinePages/index';


class Home extends Component {
  state = {
    drawerOpen: false,
    openPage: '',
  }

  drawerToggleClickHandler = (has_page, page) => {
    if (has_page){
      const rootBody = document.getElementById("root-body");
      let scrollbarWidth = (window.innerWidth - document.body.clientWidth) + 'px';

      rootBody.style.overflow="hidden";
      rootBody.style.width="calc(100% - " + scrollbarWidth + ")";
      
      this.setState({
        drawerOpen: !this.state.drawerOpen,
        openPage: page
      })
    }
  }

  backdropClickHandler = () => {
    const rootBody = document.getElementById("root-body");

    setTimeout(()=> {
      rootBody.style.overflow="visible"
      rootBody.style.width="100%";
    }, 250)

    this.setState({
      drawerOpen: false
    })
  }
 

    render () {
      let backdrop;
      if(this.state.drawerOpen){
        backdrop = <Backdrop close={this.backdropClickHandler.bind(this)}/>;
       }

      return(
      <main>
        <Drawer show={this.state.drawerOpen} page={this.state.openPage}/>
        {backdrop}
        <Container fluid={true} className="homepage-format">
          <Row className="homepage-intro-box">
            <Col className="min-w-280">
              <div className="text-outer">
                <div className="text-inner">
                  <h1 className="homepage-intro-text">
                    Catchy Title Here
                  </h1>
                  <p className="homepage-intro-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nulla enim, aliquam vitae 
                    tortor sed, pretium pellentesque mi. Vivamus accumsan, quam sit amet interdum bibendum
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-4 min-w-280 mx-auto">
              <div className="text-outer">
                <div className="text-inner">
                <Image src="https://placehold.co/600x400" fluid rounded />
                </div>
              </div>
            </Col>
          </Row>

          <Row>
          <Col> <div className="homepage-divider"/> </Col>
          </Row>

          <Row className="homepage-intro">
            <Col className="col-4">
            <Timeline toggle={this.drawerToggleClickHandler.bind(this)}/>
            </Col>

            <Col></Col>
          </Row>
          
        </Container>
      </main>
      );
    }
  }

export default Home