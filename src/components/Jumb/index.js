import React from 'react';

import { Jumbotron, Button } from 'react-bootstrap'

function Jumb({ title, active }) {
  return (
      <Jumbotron>
          <h1>{title}</h1>

          { active && 

            <div>
                <p>
                  Esse sistema foi desenvolvido para facilitar parte da 
                  administração de sua escola e estamos felizes em ter você aqui!
                </p>

                <p>
                  <Button variant='primary'>Saiba mais</Button>
                </p>
            </div>
            
          }

      </Jumbotron>
  );
}

export default Jumb;