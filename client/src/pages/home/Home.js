import React from 'react';
import Card from 'react-bootstrap/Card';

function Home() {

  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" url="https://cdn11.bigcommerce.com/s-e2nupsxogj/images/stencil/500x659/products/5873/28195/ggffsrrswiys8ev8jmp3__03454.1668759612.jpg?c=1"/>
      <Card.Body>
        <Card.Title>Welcome!</Card.Title>
        <Card.Text>
          Political connect is an a social media website to become more in tough with your local poitics and politicians.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link >Signin/Signup</Card.Link>
      </Card.Body>
    </Card>
    </div>

  );
};

export default Home;
