/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './index.css';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

import { InputLabel } from '@material-ui/core';

import logo from '../Header/bindy-logo-white.png';

import FormField from './FormField';

/* const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
})); */

function valuetext(value) {
  return `${value}°C`;
}

const Signup = () => {
  // const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container spacing={1}>
      <Grid container item xs={4} spacing={1} />
      <Grid container item xs={4} direction="column" spacing={7}>
        <img src={logo} alt="Logo" />
        <FormField label="Username" />
        <FormField label="Date of Birth" />
        <FormField label="Gender" />
        <FormField label="Interest" />
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={6}>
            <InputLabel>Age Range</InputLabel>
          </Grid>
          <Grid item xs={6}>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={6}>
            <InputLabel>Max Distance</InputLabel>
          </Grid>
          <Grid item xs={6}>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={1}>
          <Button>CREATE ACCOUNT</Button>
          <Button variant="outlined">CANCEL</Button>
        </Grid>
      </Grid>
      <Grid container item xs={4} spacing={1} />
    </Grid>
  );
};

export default Signup;
