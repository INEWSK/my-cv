import { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <Navbar fixed="sticky" bg="light">
        <Container>
          <Navbar.Text>Footer</Navbar.Text>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
