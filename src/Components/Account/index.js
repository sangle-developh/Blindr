import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './index.css';

const Account = () => {
  const [state, setState] = useState([{status : false}]);

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
