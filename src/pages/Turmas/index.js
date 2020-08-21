import React, { useState, useEffect } from 'react';

import { Container, FormControl } from 'react-bootstrap'
import Input from '../../components/Input';
import View from '../../components/View'
import ModalTab from '../../components/ModalTab'
import api from '../../services/api';
import { BsPeopleFill } from "react-icons/bs";

function Turmas() {
  const [ allTurmas, setAllTurmas ] = useState()
  const [ turma, setTurma ] = useState('')

  const [ showAllTurmas, setShowAllTurmas ] = useState(false);

  const handleClose = () => setShowAllTurmas(false);
  const handleShow = () => setShowAllTurmas(true);

  useEffect(() => {
    (async function getTurmas() {
      const tdsTurmas = await api.get('/turmas')

      setAllTurmas(tdsTurmas.data)
    })()
  }, [])

  return (
      <Container>
        <Input icon={<BsPeopleFill />}>
          <FormControl
            placeholder="Nome Completo do Aluno"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={text => setTurma(text.target.value)}
          />
        </Input>

        <View text='Turmas' showData={handleShow} />

        <ModalTab
          title='Visualizar Turmas'
          ths={['Turma']}
          show={showAllTurmas}
          handleClose={handleClose}
          turmas={allTurmas}
        />

      </Container>
  );
}

export default Turmas;