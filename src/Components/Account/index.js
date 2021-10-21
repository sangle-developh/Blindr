import React from 'react';
import './index.css';
import RightPanel from './components/RightPanel';

const Account = () => {
  return (
    <div className="account-page">
      <div className="wrapper-box">
        <div className="box-column">left</div>
        <RightPanel />
      </div>
    </div>
  );
};

export default Account;
