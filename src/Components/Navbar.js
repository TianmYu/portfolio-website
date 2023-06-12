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
            <div class="container-fluid borderless">
                <div class="row no-gutters borderless">
                    <div class="col-2 borderless"><a className="logo-container" href="/">Tian Engineers</a></div>
                    <div class="col borderless">
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
                        </Nav>
                    </div>
                    <div class="col-1 borderless">
                        <div class="logo-container"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar
