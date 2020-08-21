import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardHome({ title, text, buttonText, location }) {
  return (
    <Card style={{ width: '33rem' }}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        Gerencie {text} de uma forma fácil, cadastre,
        edite e pesquise com poucos clicks.
      </Card.Text>
      <Button as={Link} to={`/${location}`} variant="primary">Gerenciar {buttonText}</Button>
    </Card.Body>
  </Card>
  );
}

export default CardHome;