import React from "react";
import "./navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="navbar-container">
      <Container className="navbar-links-container">
        <Navbar.Brand className="nav-brand" href="/">
          DAILY JOURNAL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="nav-link" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
