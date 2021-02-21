import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import About from './About';
import Team from './Team';
import logo from './mc-logo.png';
import './App.css'; 

class NavBar extends Component {
  render() {
    return(
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img
            className="item-logo"
            src={logo}
            width="30"
            height="30"
          />{' '}
          pearlcraft
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">home</Nav.Link>
          <Nav.Link href="#about">about us</Nav.Link>
          <Nav.Link href="#team">our team</Nav.Link>
        </Nav>
      </Navbar>


    );
  }
}

export default NavBar;
