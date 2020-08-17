import React from 'react';

import { Navbar, Nav } from 'react-bootstrap'

// import { Container } from './styles';

function NavigationBar() {
  return (
      <Navbar>
        <Navbar.Brand>SWV Schools</Navbar.Brand>
        <Nav>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/students'>Alunos</Nav.Link>
          <Nav.Link href='/classes'>Turmas</Nav.Link>
        </Nav>
      </Navbar>
  );
}

export default NavigationBar;