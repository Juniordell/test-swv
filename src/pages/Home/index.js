import React, { useState } from 'react';
import { Container, DropdownButton, Dropdown, Button, FormControl, InputGroup } from 'react-bootstrap'
import CardHome from '../../components/CardHome'

import './styles.css'

function Home() {

  const [ choice, setChoice ] = useState('Alunos')

  return (
    <Container>

      <div className='homeSearch'>
        <FormControl
          style={{ maxWidth: 900 }}
          placeholder="Nome Completo do Aluno"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <DropdownButton
          as={InputGroup.Append}
          variant="outline-secondary"
          title={choice}
        >
          
          <Dropdown.Item
            eventKey='Alunos'
            onSelect={value => setChoice(value)}
          >
            Alunos
          </Dropdown.Item>

          <Dropdown.Item
            eventKey='Turmas'
            onSelect={value => setChoice(value)}
          >
            Turmas
          </Dropdown.Item>
        </DropdownButton>
        <Button>Pesquisar</Button>
      </div>
      
      <div className='homeMain' style={{ display: 'flex', justifyContent: 'space-between'}}>
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