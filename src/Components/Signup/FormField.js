import React, { useState } from 'react';
import { Form } from 'react-bulma-components';

export default ({ label }) => {
  const [state, setState] = useState('');

  return (
    <div>
      <div className="form-style">
        <Form.Label>{label}</Form.Label>
        <Form.Control>
          <Form.Input type="text" value={state} onChange={(e) => setState(e.target.value)} />
        </Form.Control>
      </div>
    </div>
  );
};
