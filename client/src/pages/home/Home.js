import React from 'react';
import Card from 'react-bootstrap/Card';
import './home.css'

function Home() {

  return (
    <div className='home-card'>
      <Card className='card-body'style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>Welcome!</Card.Title>
        <Card.Text>
          Political connect is a social media website to become more in touch with your local poitics and politicians.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <button>Create an account here or Signin</button>
      </Card.Body>
      </Card>
    </div>

  );
};

export default Home;


