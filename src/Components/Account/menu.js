import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Chip, TextField } from '@material-ui/core/';

const useStyles = makeStyles(() => ({
  paperRoot: {
    background: '#e5e5e5',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: '4 px',
    margin: 0,
  },
  chip: {
    margin: '4 px',
    borderColor: 'solid black',
    borderWidth: 'medium',
  },
  margin: {
    margin: '8 px',
  },
  menuAlign: {
    textAlign: 'left',
    margin: '10px 0',
  },
  menuBox: {
    width: '160 px',
  },
  listElements: {
    margin: '5px 5px',
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [interest, setInterest] = useState('');
  const [chipData, setChipData] = useState([]);

  const [chipSelect, setChipSelect] = useState([
    { key: 0, label: 'Cooking' },
    { key: 1, label: 'Movies' },
    { key: 2, label: 'Photography' },
    { key: 3, label: 'Eating' },
    { key: 4, label: 'Sleeping' },
  ]);

  const handleChange = (event) => {
    setInterest(event.target.value);
    for (let i = 0; i < chipSelect.length; i += 1) {
      if (chipSelect[i].key === Number(event.target.value)) {
        setChipData(() => [...chipData, chipSelect[i]]);
        break;
      }
    }
    setChipSelect(() => chipSelect.filter((el) => el.key !== Number(event.target.value)));
  };

  const handleDelete = (chipToDelete) => () => {
    for (let i = 0; i < chipData.length; i += 1) {
      if (chipData[i].key === chipToDelete.key) {
        setChipSelect(() => [...chipSelect, chipData[i]]);
        break;
      }
    }
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid>
        <Grid className={classes.menuAlign}>
          <Grid>
            <h3>Interests</h3>
            <TextField
              id="outlined-select-currency-native"
              select
              // label="Native select"
              value={interest}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              className={classes.menuBox}
              sx={{
                '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
                  border: '1px solid black',
                },
              }}
            >
              <option aria-label="None" value="" />
              {chipSelect.map((item) => (
                <option key={item.label} value={item.key}>
                  {item.label}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid component="ul" className={classes.paperRoot}>
          {chipData.map((data) => {
            return (
              <li key={data.key} className={classes.listElements}>
                <Chip
                  label={data.label}
                  onDelete={handleDelete(data)}
                  className={classes.chip}
                  variant="outlined"
                />
              </li>
            );
          })}
        </Grid>
      </Grid>
    </form>
  );
}
