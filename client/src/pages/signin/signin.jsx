import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
// import CandidateSignup from '../canidate-signup/candidate-signup';
// import VoterSignup from '../voter-signup/voter-signup';


export default function Signin(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }
        return (
          <div className="auth-form-container">    
          <Form className="signin-form" onSubmit={{handleSubmit}}>
            <Form.Group className="mb-3" id="username-input">
              <Form.Label>Username</Form.Label>
              <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" />
            </Form.Group>
      
            <Form.Group className="mb-3" id="password-input">
              <Form.Label>Password</Form.Label>
              <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
          <Link to = "/Candidate-Signup" className='button'>Signup as a Candidate</Link>
          <Link to = "/Voter-Signup" className='button'>Signup as a Voter</Link>
          </div>
          );
    }

