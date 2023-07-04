import React, { Component } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavItem from 'react-bootstrap/NavItem';
import Nav from 'react-bootstrap/Nav';
import timelineDataRaw from './TimelineData';



class NavBar extends Component {
    state = {
        activeTab: "/",
        projectsActive: false
    }

    clickHandler = (scrollPos) =>{
        console.log("setting: " + scrollPos)
        window.localStorage.setItem('scrollPos', JSON.stringify(scrollPos))
    }

    projectDates = () =>{
        let timelineData = timelineDataRaw;
        return(
            timelineData.map((data, idx) => (
                data.type === 'timestamp' &&
                <NavDropdown.Item className="nav-dropdown" href={"/#"+data.text} onClick={() => {this.clickHandler(data.text)}}>{data.text}</NavDropdown.Item>
            ))
        )
    }

    componentDidMount() {
        let path = window.location.pathname;
        let projectsActive = false;
        
        if (path === "/"){
            path = "/home";
        }
        this.setState({
            activeTab: path,
            projectsActive: projectsActive
        });
    }

    render(){
        return (
            <div className="container-fluid borderless navbar-sticky">
                <div className="row no-gutters borderless">
                    <div className="col-2 borderless logo-outer-container"> 
                        <div className="logo-outer">
                            <div className="logo-inner">
                                <a href="#home" className="logo-text" onClick={() => {this.clickHandler("home")}}>  Tian Engineers  </a>
                            </div>
                        </div>
                    </div> 
                    <div className="col borderless">
                        <Nav className="navbar" variant="underline" activeKey={this.state.activeTab}>
                            <Nav.Item className="nav-item">
                                <Nav.Link href="/about" >About</Nav.Link>
                            </Nav.Item>
                            <NavDropdown
                                title='Projects' className="nav-item" active={this.state.projectsActive} id="projects-dropdown">
                                    <NavDropdown.Item className="nav-dropdown" href="#projects" onClick={() => {this.clickHandler("projects")}}>Timeline</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    {this.projectDates()}
                            </NavDropdown>
                            <Nav.Item className="nav-item">
                                <Nav.Link href="/contact" >Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className="col-1 borderless navbar">
                        <div className="logo-container"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar
