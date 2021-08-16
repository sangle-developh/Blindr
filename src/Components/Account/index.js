import React, { useState } from 'react';
import './index.css';

const Signup = () => {
  const [value, setValue] = useState(50);
  return (
    <div className="account-page">
      <div className="wrapper-box">
        <div className="box-column">left</div>
        <div className="box-column">right</div>
      </div>
    </div>
  );
};

export default Signup;
