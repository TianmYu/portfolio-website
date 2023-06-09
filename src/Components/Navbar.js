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
        let projectsActive = false
        
        if (path == "/"){
            path = "/home";
        }
        if (path == "/projects"){
            projectsActive = true
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
    // return (
    //     // <Navbar expand="sm">
    //         <Nav variant="underline" defaultActiveKey="/">
    //             <Nav.Item>
    //                 <Nav.Link href="/">Active</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //                 <Nav.Link href="/about" eventKey="about">About</Nav.Link>
    //             </Nav.Item>
    //             <Dropdown as={NavItem}>
    //             <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
    //             <Dropdown.Menu>
    //                 <Dropdown.Item>Hello there!</Dropdown.Item>
    //             </Dropdown.Menu>
    //             </Dropdown>
    //         </Nav>
    //     // </Navbar>
    //       );
  
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <a className="navbar-brand" href="/">Tian Engineers</a>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" id="navbarProjects" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
//             Projects</a>
//             <div className="dropdown-menu" aria-labelledby="navbarProjects">
//                 <a className="dropdown-item" href="/">Project 1</a>
//                 <a className="dropdown-item" href="/">Project 2</a>
//                 <a className="dropdown-item" href="/">Project 3</a>
//             </div>
//         </li>

        
//         <li className="nav-item">
//           <a className="nav-link" href="/about">About</a>
//         </li>
//       </ul>
//     </div>
//   </nav>
