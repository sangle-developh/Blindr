import React, { useState } from 'react';

import {
  Grid,
  Slider,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from '@material-ui/core';

import { makeStyles, withStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  logo: {
    width: '35%',
  },
  input: {
    [`& fieldset`]: {
      borderRadius: '12px',
      border: '1px solid #332F2F',
    },
  },
  select: {
    [`& fieldset`]: {
      color: '#332F2F',
      borderRadius: '12px',
      border: '0.5px solid #332F2F',
    },
  },
  createAccountButton: {
    color: '#E6A698',
    backgroundColor: '#332F2F',
    '&:hover': {
      color: '#332F2F',
      backgroundColor: 'white',
      border: '1px solid #332F2F',
      boxShadow: 'none',
    },
  },
  cancelButton: {
    color: '#332F2F',
    border: '1px solid #332F2F',
    '&:hover': {
      backgroundColor: 'white',
      border: '1px solid #332F2F',
      boxShadow: 'none',
    },
  },
});

const CustomSlider = withStyles({
  rail: {
    color: '#332F2F',
  },
  track: {
    color: '#332F2F',
  },
  thumb: {
    color: '#a566d6',
    border: '0.5px solid #332F2F',
  },
})(Slider);

const defaultValues = {
  username: '',
  dateOfBirth: undefined,
  gender: '',
  interest: '',
  minAge: 0,
  maxAge: 10,
  maxDistance: 0,
};

const FormInput = () => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <>
      <Grid item xs={12} sm={4}>
        <InputLabel htmlFor="label">Username</InputLabel>
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          id="username-input"
          name="username"
          variant="outlined"
          type="text"
          size="small"
          fullWidth
          autoComplete="off"
          value={formValues.username}
          onChange={handleInputChange}
          className={classes.input}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <InputLabel htmlFor="label">D.O.B</InputLabel>
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          id="dob-input"
          name="dob"
          variant="outlined"
          type="date"
          size="small"
          fullWidth
          value={formValues.dateOfBirth}
          onChange={handleInputChange}
          className={classes.input}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <InputLabel htmlFor="label">Gender</InputLabel>
      </Grid>
      <Grid item xs={12} sm={8}>
        <FormControl fullWidth>
          <Select
            id="gender-select"
            name="gender"
            size="small"
            fullWidth
            value={formValues.gender}
            onChange={handleSelectChange}
            className={classes.select}
          >
            <MenuItem key="man" value="man">
              Man
            </MenuItem>
            <MenuItem key="woman" value="woman">
              Woman
            </MenuItem>
            <MenuItem key="other" value="other">
              Other
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <InputLabel htmlFor="label">Interest</InputLabel>
      </Grid>
      <Grid item xs={12} sm={8}>
        <FormControl fullWidth>
          <Select
            id="interest-select"
            name="interest"
            size="small"
            fullWidth
            value={formValues.interest}
            onChange={handleSelectChange}
            className={classes.select}
          >
            <MenuItem key="men" value="men">
              Men
            </MenuItem>
            <MenuItem key="women" value="women">
              Women
            </MenuItem>
            <MenuItem key="everyone" value="everyone">
              Everyone
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <InputLabel>Max Distance</InputLabel>
      </Grid>
      <Grid item xs={12}>
        <CustomSlider
          value={[0, formValues.maxDistance]}
          onChange={handleSliderChange('maxDistance')}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          className={classes.slider}
        />
      </Grid>
      <Grid item xs={12}>
        <InputLabel>Age Range</InputLabel>
      </Grid>
      <Grid item xs={12}>
        <CustomSlider
          value={[formValues.minAge, formValues.maxAge]}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          className={classes.slider}
        />
      </Grid>
    </>
  );
};

export default FormInput;
