import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import './index.css';

/* const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
})); */

function FormField(props) {
  const { label } = props;
  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item xs={6}>
        <InputLabel htmlFor="label">{label}</InputLabel>
      </Grid>
      <Grid item xs={6}>
        <TextField id="input" variant="outlined" size="small" fullWidth />
      </Grid>
    </Grid>
  );
}

export default FormField;
