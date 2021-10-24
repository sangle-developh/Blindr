/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { Grid, Box } from '@material-ui/core';
import FormInput from './Components/FormInput';
import ButtonGroup from './Components/ButtonGroup';
import Logo from './Components/Logo';

const Signup = () => {
  const [formData, setFormData] = useState({});
  const formVal = (val) => {
    setFormData(val);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const requestOptions = {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'aaa', name: 'bbb', dob: '1/2/1997' }),
    };
    fetch('http://localhost:5000/user', requestOptions).then((response) =>
      console.log(response.json()),
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box margin={7}>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Logo />
          <Grid container item xs={8} sm={3} spacing={1} alignItems="center">
            <FormInput formVal={formVal} />
            <ButtonGroup />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default Signup;
