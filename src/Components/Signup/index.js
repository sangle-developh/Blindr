import React, {useState} from 'react';
import 'bulma/css/bulma.min.css';
import { Form } from 'react-bulma-components';
import './index.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');


    return (
        <div className = 'form'>
            <Form.Field>
                <div className = 'form-style'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control>
                        <Form.Input
                        type = 'text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Control>
                </div>
            
                <div className = 'form-style'>
                    <Form.Label>D.O.B</Form.Label>
                    <Form.Control>
                        <Form.Input
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        />
                    </Form.Control>
                </div>
            
                <div className = 'form-style'>
                    <Form.Label>Gender</Form.Label>
                    <Form.Field kind="group">
                        <Form.Control>
                            <Form.Select
                            value={gender}
                            onChange={(e) => {
                                return setGender(e.target.value);
                            }}
                            >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            </Form.Select>
                        </Form.Control>
                    </Form.Field>
                </div>
            </Form.Field>

        </div>
       
    )
}

export default Signup;
