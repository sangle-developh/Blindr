import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function FormField(props) {
  const { label, select } = props;
  return (
    <Grid container alignItems="center">
      <Grid item xs={6} spacing={1}>
        <InputLabel htmlFor="label">{label}</InputLabel>
      </Grid>
      <Grid item xs={6} spacing={1}>
        <TextField id="input" variant="outlined" size="small" fullWidth />
      </Grid>
    </Grid>
  );
}

export default FormField;
