import React from 'react';
import { Grid } from '@material-ui/core';

import logo from '../Header/bindy-logo-cropped.png';

export default () => {
  return (
    <Grid container item xs={12} justifyContent="center">
      <img src={logo} alt="Logo" style={{width: '55%'}} />
    </Grid>
  );
};
