import React from "react";
import { Container, Navbar, Nav, NavItem, Button } from "react-bootstrap";

function Header() {
  return (
    <div className="header">
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
            <img src={"logo.svg"} className="headerImg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Carrer</Nav.Link>
              <Nav.Link>Events</Nav.Link>
              <Nav.Link>Products</Nav.Link>
              <Nav.Link>Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <div className="box">
        <h1>Immersive experiences that deliver</h1>
      </div>
    </div>
  );
}

export default Header;
