import React from 'react';

import { Grid } from '@material-ui/core';

import logo from '../../Header/bindy-logo-cropped.png';

const Logo = () => {
  return (
    <Grid container item xs={12} justifyContent="center">
      <img src={logo} alt="Logo" style={{width: '35%'}} />
    </Grid>
  );
};

export default Logo;
