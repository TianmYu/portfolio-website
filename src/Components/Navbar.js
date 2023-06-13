import React, { Component } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavItem from 'react-bootstrap/NavItem';
import Nav from 'react-bootstrap/Nav';

class NavBar extends Component {
    state = {
        activeTab: "/",
        projectsActive: false
    }

    componentDidMount() {
        let path = window.location.pathname;
        let projectsActive = false;
        
        if (path === "/"){
            path = "/home";
        }
        if (path === "/projects"){
            projectsActive = true;
        }
        console.log(path)
        this.setState({
            activeTab: path,
            projectsActive: projectsActive
        });
    }

    render(){
        return (
            <div className="container-fluid borderless">
                <div className="row no-gutters borderless">
                    <div className="col-2 borderless logo-outer-container"> 
                    <div className="logo-outer">
                        <div className="logo-inner">
                            <a href="/" className="logo-text">  Tian Engineers  </a>
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
                                    <NavDropdown.Item className="nav-dropdown" href="/projects">Timeline</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="nav-dropdown" href="/projects">Item1</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-dropdown" href="/projects">Item2</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-dropdown" href="/projects">Item3</NavDropdown.Item>
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
