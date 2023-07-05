import logo from '../logo.svg';
import Socials from '../Components/Socials'
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Drawer from '../Components/SlideDrawer';
import Backdrop from '../Components/Backdrop';
import pfp from '../Assets/Linkedin-profile-old.jpg';
import doggo from '../Assets/diamond.png'

class About extends Component {
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

  resumeClickHandler = () => {
    // using Java Script method to get PDF file
    fetch('Resume-Tian-Yu.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume Tian Yu.pdf';
            alink.click();
        })
    })
}

  render () {
    let backdrop;
    if(this.state.drawerOpen){
      backdrop = <Backdrop close={this.backdropClickHandler.bind(this)}/>;
     }
    return ( 
      <div>
        <Drawer show={this.state.drawerOpen} page={this.state.openPage}/>
        {backdrop}
        <Socials />

        <Container fluid={true} className="homepage-format">
          
          <Row>
            <Col>
            <div className="rough-centering">
              <h1 className="left-align">
                Hi, my name is Tian
              </h1>
              <p className="left-align large-font">
                And I like to build things. Sometimes they're on the web, like this site,
                but sometimes I have the chance to do some physical hands-on engineering (the kind that involves power
                tools and gets expensive really quickly). 
                <br/><br/>
                If you're interested in my 
                <span className="emphasis"> work history </span>, you can click on the Projects 
                tab on the top right. If you want my <span className="emphasis"> resume,
                </span> you can <a className="a" onClick={() => this.drawerToggleClickHandler(true, "ResumePage")}>click here </a> 
                to view it in browser, or <a className="a" onClick={this.resumeClickHandler}> here </a> to download it as a PDF.
                <br/><br/><br/>
                </p>
              </div>
              </Col>
              <Col className="col-4 min-w-280">
                <div className="rough-centering">
                  <img  
                  style={{
                    height:"260px",
                    borderRadius: "50%"
                  }} 
                  src={pfp}
                  alt="Profile Picture Tian Yu"/>
                </div>
              </Col>
            </Row>
          <Row>
            <div>
            <p className="left-align large-font">
              If you're still reading, I guess I can talk a bit about myself. I'm currently 23 and 
              a grad from the University of Toronto's engineering science program. Even among
              eng programs, it's a particularly work-heavy one so while I'm glad to say that I'm out, it does leave me with a lot of free time. 
              Apart from engineering I like to ski, play saxophone, work out, and cook. I also used to do archery
              but it's hard to find a range outside of campus. 
              <br/><br/>
              I'm also a dog person, although I've been warming up to cats recently. Unfortunately
              living in the Toronto makes it hard to have pets, so I make do with my family's dog,
              Diamond. 
              <br/><br/>
              Heres a picture of her, as a reward for reading this far down.
            </p>
            </div>
            
          </Row>
          <div>
            <img  
            style={{
              height:"260px",
              borderRadius: "50%",
              marginBottom: "70px",
            }} 
            src={doggo}
            alt="picture of diamond"/>
          </div>

        </Container>
      </div>
      )
    }
}

export default About