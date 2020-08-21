import React from 'react';

import { Modal, Button } from 'react-bootstrap'

function MiniModal({ show, title, text, handleClose }) {
  return (
    <Modal
    show={show}
    backdrop="static"
    centered
  >
  <Modal.Header>
    <Modal.Title>{title}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    {text}
  </Modal.Body>

  <Modal.Footer>
    <Button onClick={handleClose} variant="secondary">Fechar</Button>
  </Modal.Footer>
</Modal>
  );
}

export default MiniModal;