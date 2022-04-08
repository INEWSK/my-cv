import React, { Component } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>

          {/* Header */}
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

          {/* Content */}


          {/* Footer */}
          <Navbar fixed="bottom">
            <Container>
              <Navbar.Text>Footer</Navbar.Text>
            </Container>
          </Navbar>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
