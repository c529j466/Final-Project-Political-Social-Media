import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const CandidateSignup = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState ('');
    const [state, setState] = useState ('');
    const [district, setDistrict] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
    <div className="auth-form-container">
    <Form className='candidate-form' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" id="username-input">
        <Form.Label>Username</Form.Label>
        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" />
      </Form.Group>

      <Form.Group className="mb-3" id="email-input">
        <Form.Label>Email</Form.Label>
        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" id="password-input">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
      </Form.Group>

      <Form.Group className="mb-3" id="city-input">
        <Form.Label>City</Form.Label>
        <Form.Control value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="city" />
      </Form.Group>

      <Form.Group className="mb-3" id="state-input">
        <Form.Label>State</Form.Label>
        <Form.Control value={state} onChange={(e) => setState(e.target.value)} type="text" placeholder="state" />
      </Form.Group>

      <Form.Group className="mb-3" id="district-input">
        <Form.Label>District</Form.Label>
        <Form.Control value={district} onChange={(e) => setDistrict(e.target.value)} type="text" placeholder="district" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
    <Button onClick={() => props.onFormSwitch ('Signin')}>
        Already have an Account? Sign in here.
    </Button>
    <Button onClick={() => props.onFormSwitch ('VoterSignup')} >Signup as a Voter</Button>
    </div>
    )
}