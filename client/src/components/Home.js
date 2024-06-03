import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container} from "react-bootstrap"
function Home() {
  return (
    <div>
      <h1>Welcome to Finding Fido</h1>
      <p>Adopt a family member today!</p>
      <Container>
      <Row>
        {/* animal of the week card on first 4/12 of page */}
        <Col sm={4}>
          <Card.Title>Animal of the Week</Card.Title>
          <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
          
          <Card.Text>
          A brief explanation of the animal's personality and needs for a home and family.
          </Card.Text>
          <Button variant="primary">Adopt</Button>
        </Card.Body>
          </Card>
        </Col>

          {/* links to specific animal species on other 8/12 of page */}
        <Col sm={8}>
        <Container>
      <Row>

        <Col>
          <div className='animal-link'>
            <h2>Dogs</h2>
            {/* <img src="" /> */}
            <a href="/">Check Out Dogs</a>
          </div>
        </Col>

        <Col>
        <div className='animal-link'>
            <h2>Cats</h2>
            {/* <img src="" /> */}
            <a href="/">Check Out Cats</a>
          </div>
        </Col>
        <Col>
        <div className='animal-link'>
            <h2>Rabbits</h2>
            {/* <img src="" /> */}
            <a href="/">Check Out Rabbits</a>
          </div>
        </Col>
      </Row>
      
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Home;