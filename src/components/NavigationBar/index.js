import React from 'react';

import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './styles.css'

function NavigationBar() {
  return (
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand as={Link} to='/'>SWV Schools</Navbar.Brand>
        <Nav>

          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>

          <Nav.Link as={Link} to='/students'>
            Alunos
          </Nav.Link>

          <Nav.Link as={Link} to='/turmas'>
            Turmas
          </Nav.Link>

        </Nav>
      </Navbar>
  );
}

export default NavigationBar;