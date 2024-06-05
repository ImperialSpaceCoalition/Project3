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
      
      <Button variant="primary" href="/pets">Adopt a family member today!</Button>
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
          <div className='animal-link'>
            <img className="home-image" alt="animal pic" src={DogPic} />
            {/* <a className="link-button" href="/dogs"><Button variant="primary">Adopt a Dog</Button></a> */}
          </div>
        </Col>

        <Col>
        <div className='animal-link'>
          <img className="home-image" alt="animal pic" src={CatPic} />
            {/* <a className="link-button" href="/cats"><Button>Adopt a Cat</Button></a> */}

            {/* <a href="/cats">Cats</a> */}
          </div>
        </Col>
        
        <Col>
        <div className="animal-link">
            <img className="home-image" alt="animal pic" src={RabbitPic} />
            {/* <a className="link-button" href="/rabbits"><Button>Adopt a Rabbit</Button></a> */}
            {/* <a href="/rabbits">Rabbits</a> */}
          </div>
        </Col>

        <Col>
         <div className="animal-link">
           <img className="home-image" alt="animal pic" src={FerretPic} />  
           {/* <a className="link-button" href="/ferrets"><Button>Adopt a Ferret</Button></a> */}
            {/* <a href="/ferrets">Ferrets</a> */}
         </div>
        </Col>

        <Col>
         <div className="animal-link">
           <img className="home-image" alt="animal pic" src={GuineaPigPic}/>
           {/* <a className="link-button-guineapig" href="/guineapigs"><Button>Adopt a Guinea Pig</Button></a> */}
            {/* <a href="/guineapigs">Check Out Guinea Pigs</a> */}
         </div>
        </Col>

        <Col>
         <div className="animal-link">
           <img className="home-image" alt="animal pic" src={HamsterPic} />
           {/* <a className="link-button-gerbil" href="/hamstersgerbils"><Button>Adopt a Hamster/Gerbil</Button></a> */}
            {/* <a href="/hamstersgerbils">Check Out Hamsters and Gerbils</a> */}
         </div>
        </Col>
        

        
      </Row>

     
    </Container>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Home;