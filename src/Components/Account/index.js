/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './index.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  pronouns: {
    width: 195,
    height: 32,
    backgroundColor: 'transparent',
    border: 1,
    borderRadius: 15,

    color: 'black',
    // font-size: 18,
    // padding: 0.2rem 0.7rem 0.2rem 0.7rem,
  },
});

const Signup = () => {
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

  const [state, setState] = useState({
    age: '',
    name: 'hai',
    gender: '',
  });
  const [gender, setGender] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [interest, setInterest] = useState('');
  const [sexualOrientation, setSexualOrientation] = useState('');
  const [city, setCity] = useState('');

  const handleChange = (event) => {
    const { name } = event.target;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="account-page">
      <div className="wrapper-box">
        <div className="box-column">left</div>
        <div className="box-column right-box">
          <div className="form-field">
            <h3>Pronouns</h3>
            <TextField
              variant="outlined"
              // InputProps={{
              //   className: 'pronouns-input',
              // }}
              className="pronouns-input"
              onChange={(e) => setPronouns(e.target.value)}
            />
          </div>

          <div className="form-field">
            <h3>Gender</h3>
            <FormControl className="formControl">
              <NativeSelect
                value={gender}
                onChange={(event) => setGender(event.target.value)}
                name="gender"
                className="selection"
                inputProps={{ 'aria-label': 'gender' }}
                disableUnderline
              >
                <option value="Woman">Woman</option>
                <option value="Man">Man</option>
                <option value="Non-binary">Non-binary</option>
              </NativeSelect>
            </FormControl>
          </div>

          <div className="form-field">
            <h3>Interest</h3>
            <FormControl className="formControl">
              <NativeSelect
                value={interest}
                onChange={(event) => setInterest(event.target.value)}
                name="interest"
                className="selection"
                inputProps={{ 'aria-label': 'interest' }}
                disableUnderline
              >
                <option value="Woman">Woman</option>
                <option value="Man">Man</option>
                <option value="Both">Both</option>
              </NativeSelect>
            </FormControl>
          </div>

          <div className="form-field sex-orientation-field">
            <h3>Sexual Orientation</h3>
            <FormControl className="formControl sex-orientation-input">
              <NativeSelect
                value={sexualOrientation}
                onChange={(e) => setSexualOrientation(e.target.value)}
                name="sexualOrientation"
                className="selection"
                inputProps={{ 'aria-label': 'sexualOrientation' }}
                disableUnderline
              >
                {sexualOrientaions.map((field) => (
                  <option value={field}>{field}</option>
                ))}
              </NativeSelect>
            </FormControl>
          </div>

          <div className="form-field sex-orientation-field">
            <h3>City</h3>
            <FormControl className="formControl sex-orientation-input">
              <NativeSelect
                value={city}
                onChange={(e) => setCity(e.target.value)}
                name="city"
                className="selection"
                inputProps={{ 'aria-label': 'city' }}
                disableUnderline
              >
                {cities.map((field) => (
                  <option value={field}>{field}</option>
                ))}
              </NativeSelect>
            </FormControl>
          </div>

          <div className="connect-btn-container">
            <button className="button is-rounded connect-btn">CONNECT INSTAGRAM</button>
            <button className="button is-rounded connect-btn">CONNECT SPOTIFY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
