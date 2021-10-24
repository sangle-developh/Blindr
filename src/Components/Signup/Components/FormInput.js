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
  name: '',
  dob: undefined,
  gender: '',
  interest: '',
  ageRange: '1835',
  maxDistance: 0,
};

const FormInput = ({ formVal }) => {
  const classes = useStyles();
  const minAge = parseInt(defaultValues.ageRange.substring(0,2), 10);
  const maxAge = parseInt(defaultValues.ageRange.substring(2), 10);
  const [formValues, setFormValues] = useState(defaultValues);
  const [distanceValue, setDistanceValue] = useState(defaultValues.maxDistance);
  const [ageRangeValue, setAgeRangeValue] = useState([minAge, maxAge]);
  const handleAgeRangeChange = (event, newValue) => {
    setAgeRangeValue(newValue);
    setFormValues({
      ...formValues,
      ageRange: newValue[0].toString() + newValue[1].toString()
    });
    formVal(formValues);
  };
  const handleDistanceChange = (event, newValue) => {
    setDistanceValue(newValue);
    setFormValues({
      ...formValues,
      maxDistance: newValue,
    });
    formVal(formValues);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    formVal(formValues);
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
        <InputLabel htmlFor="label">Name</InputLabel>
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          id="name-input"
          name="name"
          variant="outlined"
          type="text"
          size="small"
          fullWidth
          autoComplete="off"
          value={formValues.name}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
          value={distanceValue}
          onChange={handleDistanceChange}
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
          value={ageRangeValue}
          onChange={handleAgeRangeChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          className={classes.slider}
        />
      </Grid>
    </>
  );
};

export default FormInput;
