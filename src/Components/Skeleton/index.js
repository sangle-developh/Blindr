import React, { useState } from 'react';
import { Form } from 'react-bulma-components';
import './index.css';
import FormField from './FormField';

export default () => {
  const [gender, setGender] = useState('');

  return (
    <div className="form">
      <p> ----------------------- </p>
      <p> ----------------------- </p>
      <p> ----------------------- </p>
      <p> ----------------------- </p>
    </div>
  );
};
