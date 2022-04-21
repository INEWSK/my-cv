import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export const Footer = () => {
  return (
    <Navbar fixed="sticky" bg="light">
      <Container>
        <Navbar.Text>Footer</Navbar.Text>
      </Container>
    </Navbar>
  );
};
