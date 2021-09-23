/* eslint-disable react/button-has-type */
import React from 'react';
import './index.css';
import { makeStyles } from '@material-ui/styles';
import RightPanel from './components/RightPanel';

const useStyles = makeStyles({});

const Signup = () => {
  return (
    <div className="account-page">
      <div className="wrapper-box">
        <div className="box-column">left</div>
        <RightPanel />
      </div>
    </div>
  );
};

export default Signup;
