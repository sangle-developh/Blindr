/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import '../index.css';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  // pronouns: {
  //   height: 40,
  //   backgroundColor: 'transparent',
  //   borderWidth: '1px',
  //   borderColor: 'black',
  //   borderRadius: 15,
  //   color: 'black',
  // },
  formField: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '2rem 100px 1rem 100px',
  },

  formControl: {
    width: '195px',
    height: '32px',
  },
  selection: {
    backgroundColor: 'transparent',
    border: '1px solid',
    borderRadius: '15px',
    color: 'black',
    fontSize: '18px',
    padding: '0.2rem 0.7rem 0.2rem 0.7rem',
  },
  longDropDownField: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  longDropDownInput: {
    width: '100%',
  },
  connectButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '3rem',
  },
  connectButton: {
    width: '374px',
    height: '51px',
    backgroundColor: 'transparent',
    border: '2px solid',
    fontSize: '22px',
    margin: '5px',
  },

  pronounsInput: {
    [`& fieldset`]: {
      border: '1px solid black',
      fontSize: '18px',
      borderRadius: '15px',
      backgroundColor: 'transparent',
    },
  },
  input: {
    padding: '0px',
  },
});

const RightPanel = () => {
  const classes = useStyles();

  const sexualOrientaions = [
    'Straight',
    'Lesbian',
    'Gay',
    'Bisexual',
    'Pansexual',
    'Asexual',
    'Demisexual',
    'Queer',
    'Questioning',
  ];

  const cities = ['Ho Chi Minh City', 'Da Nang', 'Ha Noi', 'Other'];

  const [gender, setGender] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [interest, setInterest] = useState('');
  const [sexualOrientation, setSexualOrientation] = useState('');
  const [city, setCity] = useState('');

  return (
    <div className="right-column right-box">
      <div className={classes.formField}>
        <h3>Pronouns</h3>
        <TextField
          // variant="outlined"
          value={pronouns}
          className={classes.pronounsInput}
          onChange={(e) => setPronouns(e.target.value)}
          inputProps={{
            style: { padding: '3.2px 11.2px', height: 33, width: 170 },
          }}
        />
      </div>

      <div className={classes.formField}>
        <h3>Gender</h3>
        <FormControl className={classes.formControl}>
          <NativeSelect
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            name="gender"
            className={classes.selection}
            inputProps={{ 'aria-label': 'gender' }}
            disableUnderline
          >
            <option value="Woman">Woman</option>
            <option value="Man">Man</option>
            <option value="Non-binary">Non-binary</option>
          </NativeSelect>
        </FormControl>
      </div>

      <div className={classes.formField}>
        <h3>Interest</h3>
        <FormControl className={classes.formControl}>
          <NativeSelect
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
            name="interest"
            className={classes.selection}
            inputProps={{ 'aria-label': 'interest' }}
            disableUnderline
          >
            <option value="Woman">Woman</option>
            <option value="Man">Man</option>
            <option value="Both">Both</option>
          </NativeSelect>
        </FormControl>
      </div>

      <div className={`${classes.formField} ${classes.longDropDownField}`}>
        <h3>Sexual Orientation</h3>
        <FormControl className={`${classes.formControl} ${classes.longDropDownInput}`}>
          <NativeSelect
            value={sexualOrientation}
            onChange={(e) => setSexualOrientation(e.target.value)}
            name="sexualOrientation"
            className={classes.selection}
            inputProps={{ 'aria-label': 'sexualOrientation' }}
            disableUnderline
          >
            {sexualOrientaions.map((field) => (
              <option value={field}>{field}</option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>

      <div className={`${classes.formField} ${classes.longDropDownField}`}>
        <h3>City</h3>
        <FormControl className={`${classes.formControl} ${classes.longDropDownInput}`}>
          <NativeSelect
            value={city}
            onChange={(e) => setCity(e.target.value)}
            name="city"
            className={classes.selection}
            inputProps={{ 'aria-label': 'city' }}
            disableUnderline
          >
            {cities.map((field) => (
              <option value={field}>{field}</option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>

      <div className={classes.connectButtonContainer}>
        <button className={`button is-rounded ${classes.connectButton}`}>CONNECT INSTAGRAM</button>
        <button className={`button is-rounded ${classes.connectButton}`}>CONNECT SPOTIFY</button>
      </div>
    </div>
  );
};

export default RightPanel;
