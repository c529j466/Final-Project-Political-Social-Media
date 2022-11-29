import React from 'react';
import Card from 'react-bootstrap/Card';
import './home.css'
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className='home-card'>
      <Card className='card-body'>
      <Card.Body>
        <Card.Title>Welcome to Political Connect!</Card.Title>
        <Card.Text>
          Political Connect is a website used to help people connect with their local politics and politicians.
        </Card.Text>
        <Card.Text>
          As a Candidate you can create a public profile and create posts about your campaign and events, to inform your local voters.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Text>If you are a candidite on your local ballot, click the button below to create an account.</Card.Text>
      <Link to = "/Register" className='card-button'><button>Create an Account</button></Link>
      </Card.Body>
      </Card>
    </div>

  );
};

export default Home;


