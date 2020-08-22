import React, { useState, useEffect } from 'react';

import { Container, FormControl, Button, Card } from 'react-bootstrap'
import Input from '../../components/Input';
import View from '../../components/View'
import ModalTab from '../../components/ModalTab'
import MiniModal from '../../components/MiniModal'

import api from '../../services/api';
import { BsPeopleFill } from "react-icons/bs";
import './styles.css'

const nothing = [{
  nome: 'Nenhum resultado encontrado!'
}]

function Turmas() {
  const [ allTurmas, setAllTurmas ] = useState()
  const [ turmas, setTurmas ] = useState('')
  const [ thisTurma, setThisTurma ] = useState('')
  const [ nomeTurma, setNomeTurma ] = useState('')
  const [ error, setError ] = useState(false)
  const [ errorSearch, setErrorSearch ] = useState(false)

  const [ showMiniModal, setShowMiniModal ] = useState(false)
  const closeMiniModal = () => setShowMiniModal(false)

  const [ showAllTurmas, setShowAllTurmas ] = useState(false);
  const handleClose = () => setShowAllTurmas(false);
  const handleShow = () => setShowAllTurmas(true);

  const [ showTurmas, setShowTurmas ] = useState(false);
  const handleCloseOne = () => setShowTurmas(false);
  const handleShowOne = () => setShowTurmas(true);

  useEffect(() => {
    (async function getTurmas() {
      const tdsTurmas = await api.get('/turmas')

      setAllTurmas(tdsTurmas.data)
    })()
  }, [])

  function getTurma() {
    if (thisTurma.length < 4) {
      setErrorSearch(true)
    } 

    else {
      setErrorSearch(false)
      const rightTurma = allTurmas.filter(oneTurma => oneTurma.nome.toUpperCase().includes(thisTurma.toUpperCase()))

      if (rightTurma.length === 0) setTurmas(nothing)

      else setTurmas(rightTurma)

      handleShowOne()
    }
  }

  function postTurma() {

    if ( nomeTurma.length < 1 ) {
      setError(true)
    } 
    
    else {
      setError(false)
      api.post('/setturma', {
        nome: nomeTurma,
      }).then(() => setShowMiniModal(true))
        .catch(err => console.log(err))
    }
  }


  return (
      <Container>
              
        <div className='container__main' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Card className='container__card w-100 mr-4 pb-3 pt-5 px-3 justify-content-between'>
            { error &&
              <p style={{ color: 'red', position: 'absolute', top: 15 }}>Algo deu errado, confira os dados!</p>
            }
            <h2>Cadastrar Turma</h2>

            <Input
              icon={<BsPeopleFill />}
            >

              <FormControl
                placeholder="Descrição Turma"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={text => setNomeTurma(text.target.value)}
              />
            
            </Input>

            <Button className='p-2 ml-auto' onClick={postTurma}>Cadastrar Turma</Button>
          </Card>

          <Card className='container__card w-100 ml-4 pb-3 pt-5 px-3 justify-content-between'>
            { errorSearch &&
              <p style={{ color: 'red', position: 'absolute', top: 15 }}>Algo deu errado, confira os dados!</p>
            }
            <h2>Pesquisar Turma</h2>

            <Input
              icon={<BsPeopleFill />}
            >

              <FormControl
                placeholder="Descrição Turma"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={text => setThisTurma(text.target.value)}
              />

            </Input>

            <Button className='p-2 ml-auto' onClick={getTurma}>Buscar Turma</Button>
          </Card>
        </div>

        <View text='Turmas' showData={handleShow} />

        <ModalTab
          title='Visualizar Turmas'
          ths={['Turma']}
          show={showAllTurmas}
          handleClose={handleClose}
          turmas={allTurmas}
        />

        <ModalTab
          title='Resultado da Busca - Turmas'
          ths={['Turma']}
          show={showTurmas}
          handleClose={handleCloseOne}
          turmas={turmas}
        />

      <MiniModal 
        show={showMiniModal}
        title='Cadastro de Turma'
        text='Cadastro realizado com sucesso!'
        handleClose={closeMiniModal}
      />

      </Container>
  );
}

export default Turmas;