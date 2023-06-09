import React, { Component } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavItem from 'react-bootstrap/NavItem';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';

class NavBar extends Component {
    state = {
        activeTab: "/",
        projectsActive: false
    }

    componentDidMount() {
        let path = window.location.pathname;
        let projectsActive = false;
        
        if (path == "/"){
            path = "/home";
        }
        if (path == "/projects"){
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
            <Nav variant="underline" activeKey={this.state.activeTab}>
                <Nav.Item>
                    <Nav.Link href="/">Tian Engineers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about" >About</Nav.Link>
                </Nav.Item>
                <NavDropdown
                    title='Projects' active={this.state.projectsActive} id="projects-dropdown">
                        <NavDropdown.Item href="/projects">Timeline</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/projects">Item1</NavDropdown.Item>
                        <NavDropdown.Item href="/projects">Item2</NavDropdown.Item>
                        <NavDropdown.Item href="/projects">Item3</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        );
    }
}

export default NavBar
