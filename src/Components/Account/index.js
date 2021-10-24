import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import './index.css';
import RightPanel from './components/RightPanel';
import MultilineTextFields from './menu';

const useStyles = makeStyles({
  gridItem: {
    width: '100%',
  },
  leftColumnRoot: {
    direction: 'column',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '45px 100px',
  },
  input: {
    fontSize: '30px',
  },
});

export default (props) => {
  const classes = useStyles(props);

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });
  const [bio, setBio] = useState('');
  const [workplace, setWorkplace] = useState('');

  const switchHandleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const bioHandleChange = (event) => {
    setBio(event.target.value);
  };

  const workplaceHandleChange = (event) => {
    setWorkplace(event.target.value);
  };

  return (
    <div className="account-page">
      <div className="wrapper-box">
        <div className="left-column">
          <Grid container className={classes.leftColumnRoot}>
            <Grid item>
              <FormControlLabel
                control={
                  <Switch
                    checked={state.checkedB}
                    onChange={switchHandleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontSize: '22px',
                  },
                }}
                label="Show my Bindy profile"
              />
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" alignItems="flex-start">
                <h3>About me</h3>
                <TextField
                  className={classes.gridItem}
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                  variant="outlined"
                  value={bio}
                  onChange={bioHandleChange}
                  sx={{
                    '& .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root': {
                      border: '1px solid black',
                      fontSize: '18px',
                      borderRadius: '15px',
                      backgroundColor: 'transparent',
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" alignItems="flex-start">
                <h3>School/Company</h3>
                <TextField
                  className={classes.gridItem}
                  id="outlined-multiline-flexible"
                  multiline
                  maxRows={4}
                  value={workplace}
                  onChange={workplaceHandleChange}
                  variant="outlined"
                  sx={{
                    '& .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root': {
                      border: '1px solid black',
                      fontSize: '18px',
                      borderRadius: '15px',
                      backgroundColor: 'transparent',
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Grid item>
              <MultilineTextFields />
            </Grid>
          </Grid>
        </div>
        <RightPanel />
      </div>
    </div>
  );
};
