import React from "react";
import {Navbar, Nav } from "react-bootstrap"

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/"><img src="logo.png" alt="logo" /></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/AboutMe">About Me</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
          <Nav.Link href="/Resume">Resume</Nav.Link>
        </Nav>
        
      </Navbar>
    </div>
  );
};

export default NavBar;
