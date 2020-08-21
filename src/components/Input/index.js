import React from 'react';
import { InputGroup } from 'react-bootstrap'

function Input({ icon, children }) {
  return (
    <InputGroup className='mb-3 flex-nowrap'>
      <InputGroup.Prepend>
        <InputGroup.Text>{icon}</InputGroup.Text>
      </InputGroup.Prepend>
      {children}
    </InputGroup>

  );
}

export default Input;