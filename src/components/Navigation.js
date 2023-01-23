import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Container fluid >
        <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="home">Workshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="people">People</Nav.Link>
            <Nav.Link href="click">Click Counter</Nav.Link>
            <Nav.Link href="wikipedia">Wikipedia</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navigation;