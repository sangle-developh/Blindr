/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

import { InputLabel } from '@material-ui/core';

import logo from '../Header/bindy-logo-white.png';

import FormField from './FormField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Signup = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid container item xs={4} spacing={1}></Grid>
      <Grid container item xs={4} direction="column" spacing={24}>
        <img src={logo} alt="Logo" />
        <FormField label="Username" />
        <FormField label="Date of Birth" />
        <FormField label="Gender" />
        <FormField label="Interest" />
        <Grid container alignItems="center">
          <Grid item xs={6} spacing={1}>
            <InputLabel>Age Range</InputLabel>
          </Grid>
          <Grid item xs={6} spacing={1}>
            <Slider valueLabelDisplay="auto" aria-labelledby="range-slider" />
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item xs={6} spacing={1}>
            <InputLabel>Max Distance</InputLabel>
          </Grid>
          <Grid item xs={6} spacing={1}>
            <Slider valueLabelDisplay="auto" aria-labelledby="range-slider" />
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Button>CREATE ACCOUNT</Button>
          <Button variant="outlined">CANCEL</Button>
        </Grid>
      </Grid>
      <Grid container item xs={4} spacing={1}></Grid>
    </Grid>
  );
};

export default Signup;
