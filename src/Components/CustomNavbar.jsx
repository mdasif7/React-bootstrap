import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';
class CustomNavbar extends Component {
  render() {
    return (
      
     <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">CodeLife</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            <NavDropdown eventKey={3} title="News" >
            
                <MenuItem eventKey={3.1} componentClass={Link} href="/news" to="/news">News</MenuItem>
                <MenuItem eventKey={3.2} componentClass={Link} href="/news" to="/news">Another action</MenuItem>
                <MenuItem eventKey={3.3} componentClass={Link} href="/news" to="/news">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated Link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    );
  }
}
export default CustomNavbar;
