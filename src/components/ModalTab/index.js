import React from 'react';

import { Button, Modal, Table } from 'react-bootstrap'

function ModalTab({ title, children, ths, show, handleClose, students, turmas }) {
  return (

    <Modal
      show={show}
      backdrop="static"
      centered
      size='lg'
    >
    <Modal.Header>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <Table
        striped
        bordered
        hover
      >
        <thead>
          <tr style={{textAlign: 'center'}}>
            { ths.map(th => (
              <th>{th}</th>
            )) }
          </tr>
        </thead>
          
        <tbody>
            { students &&
            students.map(student => (
              <tr style={{textAlign: 'center'}}>
                <td>{student.nome}</td>
                <td>{student.data_nascimento}</td>
                <td>{student.sexo === 'M' ? 'Masculino' : 'Feminino'}</td>
                <td>{student.nome_turma}</td>
              </tr>
            )) }

            { turmas && 
            turmas.map(turma => (
              <tr style={{textAlign: 'center'}}>
                <td>{ turma.nome }</td>
              </tr>
            )) }
        </tbody>


      </Table>
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={handleClose} variant="primary">Fechar</Button>
    </Modal.Footer>
  </Modal>

  );
}

export default ModalTab;