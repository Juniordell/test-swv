import React, { useEffect, useState } from 'react';

import { Container, InputGroup, FormControl, Card, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import api from '../../services/api';
import View from '../../components/View'
import { BsPeopleFill, BsPersonFill, BsFillCalendarFill, BsCircle } from "react-icons/bs";

import './styles.css'
import ModalTab from '../../components/ModalTab';
import MiniModal from '../../components/MiniModal'
import Input from '../../components/Input';


function Students() {

  // Sing up States
  const [ nome, setNome ] = useState('')
  const [ data_nascimento, setData_nascimento ] = useState('')
  const [ sexo, setSexo ] = useState('Sexo')
  const [ turmaPost, setTurmaPost ] = useState('Turma')
  const [ error, setError ] = useState(false)

  // Search States
  const [ allStudents, setAllStudents ] = useState([])
  const [ student, setStudent ] = useState({})
  const [ turmas, setTurmas ] = useState([])
  const [ dropTurmas, setDropTurmas ] = useState('Turma')
  const [ dropSexo, setDropSexo ] = useState('Sexo')
  const [ name, setName ] = useState(' ')
  const [ errorSearch, setErrorSearch ] = useState(false)

  const [ showAllStudents, setShowAllStudents ] = useState(false)
  const handleClose = () => setShowAllStudents(false)
  const handleShow = () => setShowAllStudents(true)

  const [ showStudents, setShowStudents ] = useState(false)
  const handleCloseOne = () => setShowStudents(false)
  const handleShowOne = () => setShowStudents(true)


  const [ showMiniModal, setShowMiniModal ] = useState(false)
  const closeMiniModal = () => setShowMiniModal(false)


  useEffect(() => {
    api.get('/alunos')
      .then(resp => setAllStudents(resp.data))
      .catch(err => console.log(err))
    api.get('/turmas')
      .then(resp => setTurmas(resp.data))
      .catch(err => console.log(err))

  }, [])

  async function getStudent() {
    if (name.length < 1 || dropTurmas === 'Turma' || dropSexo === 'Sexo') {
      setErrorSearch(true)
    }

    else {
      setErrorSearch(false)
      const rightTurma = turmas.filter(turma => turma.nome === dropTurmas)
      const newTurma = rightTurma[0].id_turma
      const thisStudent = await api.get(`/alunos?nome=${name}&sexo=${dropSexo}&id_turma=${newTurma}`)

      setStudent(thisStudent)

      handleShowOne()
    }

  }

  function postAluno() {

    if (nome.length < 1 || turmaPost === 'Turma' || sexo === 'Sexo' || data_nascimento.length < 8) {
      setError(true)
    } 
    
    else {
      setError(false)
      const rightTurma = turmas.filter(turma => turma.nome === turmaPost)
      const id_turma = rightTurma[0].id_turma
      api.post('/setaluno', {
        nome,
        id_turma,
        data_nascimento,
        sexo,
      }).then(() => setShowMiniModal(true))
        .catch(err => console.log(err))
    }
  }




  return (
    <Container>
      
      <div className='container__main' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Card className='container__card pb-3 pt-5 px-3 justify-content-between'>

          { error &&
            <p style={{ color: 'red', position: 'absolute', top: 15 }}>Algo deu errado, confira os dados!</p>
          }
          <h2>Cadastrar Aluno</h2>

          <div>
            <Input icon={<BsPersonFill />}>
              <FormControl
                placeholder="Nome Completo do Aluno"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={text => setNome(text.target.value)}
              />
            </Input>

            <Input icon={<BsFillCalendarFill />}>
              <FormControl
                placeholder="Data de Nascimento do Aluno"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={text => setData_nascimento(text.target.value)}
              />
            </Input>

            <Input icon={<BsCircle />}>
              <DropdownButton
                as={InputGroup.Append}
                variant="outline-secondary"
                title={sexo}
                className='w-100'
              >
                
                <Dropdown.Item
                  eventKey='F'
                  onSelect={value => setSexo(value)}
                >
                  F
                </Dropdown.Item>

                <Dropdown.Item
                  eventKey='M'
                  onSelect={value => setSexo(value)}
                >
                  M
                </Dropdown.Item>
              </DropdownButton>
            </Input>
            
            <Input icon={<BsPeopleFill />}>
              <DropdownButton
                as={InputGroup.Append}
                variant="outline-secondary"
                title={turmaPost}
                className='w-100'
              >
                
                { turmas.map(turma => (
                  <Dropdown.Item
                    eventKey={turma.nome}
                    onSelect={value => setTurmaPost(value)}
                  >
                    {turma.nome}
                  
                  </Dropdown.Item>
                )) }
              </DropdownButton>
            </Input>

          </div>


          <Button className='p-2 ml-auto' onClick={postAluno}>Cadastrar Aluno</Button>

        </Card>

        <Card className='container__card pb-3 pt-5 px-3 justify-content-between'>
          { errorSearch &&
            <p style={{ color: 'red', position: 'absolute', top: 15 }}>Algo deu errado, confira os dados!</p>
          }
          <h2>Pesquisar Aluno</h2>

          <div>
            <Input icon={<BsPersonFill />}>
              <FormControl
                onChange={text => setName(text.target.value)}
                placeholder="Nome Completo do Aluno"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </Input>

            <Input icon={<BsCircle />}>
              <DropdownButton
                as={InputGroup.Append}
                variant="outline-secondary"
                title={dropSexo}
                className='w-100'
              >
                
                <Dropdown.Item
                  eventKey='F'
                  onSelect={value => setDropSexo(value)}
                >
                  F
                </Dropdown.Item>

                <Dropdown.Item
                  eventKey='M'
                  onSelect={value => setDropSexo(value)}
                >
                  M
                </Dropdown.Item>
              </DropdownButton>
            </Input>
            
            <Input icon={<BsPeopleFill />}>
              <DropdownButton
                as={InputGroup.Append}
                variant="outline-secondary"
                title={dropTurmas}
                className='w-100'
              >
                
                { turmas.map(turma => (
                  <Dropdown.Item
                    eventKey={turma.nome}
                    onSelect={value => setDropTurmas(value)}
                  >
                    {turma.nome}
                  
                  </Dropdown.Item>
                )) }
              </DropdownButton>
            </Input>
          </div>



          <Button className='p-2 ml-auto' onClick={getStudent}>Buscar Aluno</Button>
        </Card>
      </div>

      <View text='Alunos' showData={handleShow} />

      <ModalTab
        title='Alunos'
        ths={['Aluno', 'Data de Nascimento', 'Sexo', 'Turma']}
        show={showAllStudents}
        handleClose={handleClose}
        students={allStudents}
      />

      <ModalTab
        title='Alunos'
        ths={['Aluno', 'Data de Nascimento', 'Sexo', 'Turma']}
        show={showStudents}
        handleClose={handleCloseOne}
        students={student.data}
      />

      <MiniModal 
        show={showMiniModal}
        title='Cadastro de Aluno'
        text='Cadastro realizado com sucesso!'
        handleClose={closeMiniModal}
      />

        
    </Container>
  );
}

export default Students;