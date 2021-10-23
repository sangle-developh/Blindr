/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { Grid, Box } from '@material-ui/core';
import FormInput from './Components/FormInput';
import ButtonGroup from './Components/ButtonGroup';
import Logo from './Components/Logo';

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box margin={7}>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Logo />
          <Grid container item xs={8} sm={3} spacing={1} alignItems="center">
            <FormInput />
            <ButtonGroup />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default Signup;
