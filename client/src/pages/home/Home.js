import React from 'react';
import Card from 'react-bootstrap/Card';
import './home.css'

function Home() {

  return (
    <div className='home-card'>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Welcome!</Card.Title>
        <Card.Text>
          Political connect is an a social media website to become more in touch with your local poitics and politicians.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <button>Signin/Signup</button>
      </Card.Body>
    </Card>
    </div>

  );
};

export default Home;
