/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import 'bulma/css/bulma.min.css';
import './index.css';

const Signup = () => {
    
    return (
        <div className = 'form'>
            
            <div className="field">
                <label className="label">
                    Username
                </label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input"/>
                </div>
            </div>

            <div className="field">
                <label className="label">
                    D.O.B
                </label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Gender</label>
                <div className="control">
                    <div className="select">
                    <select>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                    </div>
                </div>
            </div>

            <div className="field">
                <label className="label">Interest</label>
                <div className="control">
                    <div className="select">
                    <select>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                    </div> 
                </div>
            </div>

            <div className="field">
                <label className="label">Max Distance</label>
                <div className="control">
                    <input className="slider is-fullwidth" step="1" min="0" max="100" value="50" type="range"/>
                </div>
            </div>

            <div className="field">
                <label className="label">Age Range</label>
                <div className="control">
                    <input className="slider is-fullwidth" step="1" min="0" max="100" value="50" type="range"/>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <button type="button" className="button is-link">CREATE ACCOUNT</button>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <button type = "button" className="button is-link is-light">CANCEL</button>
                </div>
            </div>
            
        </div>
       
    )
}

export default Signup;
