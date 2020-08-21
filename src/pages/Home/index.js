import React from 'react';
import { Container } from 'react-bootstrap'
import CardHome from '../../components/CardHome'

function Home() {

  return (
    <Container>

      <div>

      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <CardHome
          title='Alunos'
          text='os alunos'
          buttonText='Alunos'
          location='students'
        />

        <CardHome
          title='Turmas'
          text='turmas'
          buttonText='Turmas'
          location='turmas'
        />
      </div>

    </Container>
  );
}

export default Home;