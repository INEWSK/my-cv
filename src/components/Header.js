import { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">INEWSK</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link active>CV</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://inewsk.me/">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://github.com/INEWSK">Github</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
