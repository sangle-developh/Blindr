import React from 'react';

import { Grid, Button } from '@material-ui/core';

const ButtonGroup = () => {
  return (
    <>
      <Grid item xs={12}>
        <Button
          variant="contained"
          type="submit"
          fullWidth
          style={{ color: '#E6A698', backgroundColor: '#332F2F' }}
        >
          CREATE ACCOUNT
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          fullWidth
          style={{ color: '#332F2F', border: '1px solid #332F2F' }}
        >
          CANCEL
        </Button>
      </Grid>
    </>
  );
};

export default ButtonGroup;
