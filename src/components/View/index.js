import React from 'react';

import { Button, Card } from 'react-bootstrap'

import './styles.css'

function View({ text, showData }) {
  return (
      <Card className='view mt-9'>
          <h3>Visualizar {text}</h3>

          <Button onClick={showData}>Exibir</Button>
      </Card>
  );
}

export default View;