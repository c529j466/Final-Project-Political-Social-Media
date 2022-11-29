import React from 'react';
import Card from 'react-bootstrap/Card';
import './home.css'
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className='home-card'>
      <Card className='card-body'>
      <Card.Body>
        <Card.Title>Welcome!</Card.Title>
        <Card.Text>
          Political connect is a website used to help people connect better with their local polotics and poloticians. 
        </Card.Text>
      </Card.Body>
      <Card.Body>
      <Link to = "/Candidate-Signup" className='card-button'><button>Create an Account HERE</button></Link>
      </Card.Body>
      </Card>
    </div>

  );
};

export default Home;


