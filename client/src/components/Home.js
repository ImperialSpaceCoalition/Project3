import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container} from "react-bootstrap"
import DogPic from "./images/dog_image.jpeg";
import CatPic from "./images/cat_image.jpg";
import FerretPic from "./images/ferret_image.jpeg";
import RabbitPic from "./images/rabbit_image.jpeg";
import GuineaPigPic from "./images/guinea_pig_image.jpg";
import HamsterPic from "./images/hamster_image.jpg";
function Home() {
  return (
    <div>
      <h1>Welcome to Finding Fido</h1>
      
      <Button class="adopt-button" variant="primary" href="/availablepets">Adopt a family member today!</Button> */
      {/* {/* <Button variant="primary"></Button> */}
      <Container>
      <Row>
        {/* animal of the week card on first 4/12 of page */}
        
        <Col sm={4}>
       
          <Card.Title>Animal of the Week</Card.Title>
          <Card style={{ width: '25rem', height: '30rem', backgroundColor:"lightseagreen" }}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
          
          <Card.Text>
          A brief explanation of the animal's personality and needs for a home and family.
          </Card.Text>
          {/* <Button variant="primary">Adopt</Button> */}
        </Card.Body>
          </Card>
       
        </Col>

          {/* links to specific animal species on other 8/12 of page */}
        <Col sm={8}>
        <Container>
      <Row>

        <Col>
          <div className='animal-link flip-box'>
            <div className='flip-box-inner'>
              <div className='flip-box-front'>
            <img className="home-image" alt="animal pic" src={DogPic} />
            </div>
            <div className='flip-box-back'>
              <h2>Dogs!</h2>
            </div>
            </div>
          </div>
        </Col>

        <Col>
        <div className="cat-link flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="home-image" alt="animal pic" src={CatPic} />
            </div> 
            <div className='flip-box-back'>
              <h2>Cats!</h2>
            </div> 
          </div>
        </div>
        </Col>
        
        <Col>
        <div className="animal-link flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="home-image" alt="animal pic" src={RabbitPic} />
            </div> 
            <div className='flip-box-back'>
              <h2>Rabbits!</h2>
            </div> 
          </div>
        </div>
        </Col>

        <Col>
        <div className="animal-link flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="home-image" alt="animal pic" src={FerretPic} />
            </div> 
            <div className='flip-box-back'>
              <h2>Ferrets!</h2>
            </div> 
          </div>
        </div>
        </Col>

        <Col>
        <div className="animal-link flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="home-image" alt="animal pic" src={GuineaPigPic} />
            </div> 
            <div className='flip-box-back'>
              <h2>Guinea Pigs!</h2>
            </div> 
          </div>
        </div>
        </Col>

        <Col>
        <div className="animal-link flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="home-image" alt="animal pic" src={HamsterPic} />
            </div> 
            <div className='flip-box-back'>
              <h2>Hamsters and Gerbils!</h2>
            </div> 
          </div>
        </div>
        </Col>
        

        
      </Row>

      <Button class="adopt-button" className="link-button" variant="primary" href="/pets">Adopt a family member today!</Button>

     
    </Container>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Home;