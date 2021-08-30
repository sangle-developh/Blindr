<<<<<<< HEAD
import React from 'react';
import './index.css';

const Account = () => {
  // const [value, setValue] = useState(50);
=======
import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './index.css';

const Account = () => {
  const [state, setState] = useState([{status : false}]);

>>>>>>> 296146f953b4c2c6730e4ab9b6dd7b54ae8308c7
  return (
    <div className="account-page">
      <div className="wrapper-box">
        <div className="box-column">
          <div className="field">
            <input 
              id="switchRoundedDefault" 
              type="checkbox"
              name="switchRoundedDefault" 
              className="switch is-rounded" 
              checked= {state.status} 
              onChange={(e) => setState({ ...state, [e.target.name]: e.target.checked })}/>
            <label htmlFor="switchRoundedDefault">Show my Bindy profile</label>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Placeholder for bio" />
            </div>
          </div>

          <div className="field">
            <label className="label">
                School/Company
            </label>
            <div className="control">
                <input 
                  className="input" 
                  type="text" 
                  placeholder="Placeholder for school/company name"/>
            </div>
          </div>

          <div className="field">
            <label className="label">Interest</label>
            <div className="control">
                <div className="select">
                <select>
                    <option>Photography</option>
                    <option>Cooking</option>
                    <option>Movies</option>
                </select>
                </div>
            </div>
          </div>
        </div>

        <div className="box-column">right</div>
      </div>
    </div>
  );
};

export default Account;
