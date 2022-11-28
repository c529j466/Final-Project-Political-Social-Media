import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const VoterSignup = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
    <div className="auth-form-container">
    <Form className="voter-form" onSubmit={handleSubmit}>
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
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
    <Button onClick={() => props.onFormSwitch ('Signin')}>Already have an Account? Sign in here.</Button>
    <Button onClick={() => props.onFormSwitch ('CandidateSignup')}>Signup as a Candidate</Button>
    </div>
    )
}