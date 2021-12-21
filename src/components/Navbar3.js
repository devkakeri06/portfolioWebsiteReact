import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";
import { Projects } from "./Projects";
import { Resume } from "./Resume";
import { About } from "./About";
import { Body } from "./Body";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

export class Navbar3 extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand as={Link} to={"/"}>
                <span id="navbar">
                  &#60; <u>Dev</u>Kakeri/ &#62;
                </span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/aboutme"}>
                    About Me
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/skills"}>
                    Skills
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/projects"}>
                    Projects
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/resume"}>
                    Resume
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/contactme"}>
                    Contact Me
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<Body />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/aboutme" element={<About />} />
            <Route path="/contactme" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
