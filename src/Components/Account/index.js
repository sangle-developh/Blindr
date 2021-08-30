/* eslint-disable react/button-has-type */
import React from 'react';
import './index.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';

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

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

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
        <div className="box-column">
          <div className="form-field">
            <h3>Pronouns</h3>
            <TextField
              InputProps={{
                className: 'pronouns-input',
              }}
            />
          </div>
          <div className="form-field">
            <h3>Gender</h3>
            <FormControl className="formControl">
              <NativeSelect
                value={state.age}
                onChange={handleChange}
                name="age"
                className="selection"
                inputProps={{ 'aria-label': 'age' }}
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
                value={state.age}
                onChange={handleChange}
                name="age"
                className="selection"
                inputProps={{ 'aria-label': 'age' }}
                disableUnderline
              >
                <option value="Woman">Woman</option>
                <option value="Man">Man</option>
                <option value="Both">Non-binary</option>
              </NativeSelect>
            </FormControl>
          </div>

          <div className="form-field sex-orientation-field">
            <h3>Sexual Orientation</h3>
            <FormControl className="formControl sex-orientation-input">
              <NativeSelect
                value={state.age}
                onChange={handleChange}
                name="age"
                className="selection"
                inputProps={{ 'aria-label': 'age' }}
                disableUnderline
              >
                <option value="Woman">Woman</option>
                <option value="Man">Man</option>
                <option value="Both">Non-binary</option>
              </NativeSelect>
            </FormControl>
          </div>

          <div className="form-field sex-orientation-field">
            <h3>City</h3>
            <FormControl className="formControl sex-orientation-input">
              <NativeSelect
                value={state.age}
                onChange={handleChange}
                name="age"
                className="selection"
                inputProps={{ 'aria-label': 'age' }}
                disableUnderline
              >
                <option value="Woman">Woman</option>
                <option value="Man">Man</option>
                <option value="Both">Non-binary</option>
              </NativeSelect>
            </FormControl>
          </div>

          {/* <div className="form-field">
            <h3>Pronouns</h3>
            <input className="input" type="text" placeholder="she/her" />
          </div>
          <div className="form-field">
            <h3>Gender</h3>
            <div className="select is-fullwidth">
              <select>
                <option>Man</option>
                <option>Woman</option>
                <option>Non-binary</option>
              </select>
            </div>
          </div>
          <div className="form-field">
            <h3>Interest</h3>
            <div className="select">
              <select>
                <option>Man</option>
                <option>Woman</option>
                <option>Both</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <h3>Sexual Orientation</h3>
            <div className="select">
              <select>
                {sexualOrientaions.map((item) => (
                  <option>{item}</option>
                ))}
              </select>
            </div>
          </div> */}

          {/* <div className="form-field">
            <h3>City</h3>
            <input className="input" type="text" placeholder="Search for city" />
          </div> */}
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
