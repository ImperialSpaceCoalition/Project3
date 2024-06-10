import {useState} from 'react';
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
import {getAvailablePets} from '../services/petRescueApi'
import LabradorPic from "./images/labrador_retriever_image.jpg"
function Home() {
  const [pets, setPets] = useState([]);

//   useEffect(() => {
//     const fetchPets = async () => {
//         try {
//             const data = await getAvailablePets(location);
//             console.log(data);
//             setPets(data);
      
//         } catch (error) {
//             console.error('Error fetching pets', error);
            
//         }
//     };

//     if (location) {
//         fetchPets();
//     }
// }, [location]);


  return (
    <div>
      <h1> Welcome to Finding Fido-Where Pet Lovers Connect🐾</h1>
      
      
      {/* <Button class="adopt-button" variant="primary" href="/availablepets">Adopt a family member today!</Button> */}
      {/* {/* <Button variant="primary"></Button> */}
      <Container>
      <Row>
        {/* animal of the week card on first 4/12 of page */}
        
        <Col sm={4}>
       
          <Card.Title style={{marginRight: "auto", marginLeft: "auto", color: "black", fontFamily: "papyrus", fontSize: "30px", fontWeight: "600"}}>Animal of the Week</Card.Title>
          <Card style={{ width: '25rem', height: '40rem', backgroundColor:"lightseagreen" }}>
         <Card.Img variant="top" src={LabradorPic} />
         <Card.Body>
         <Card.Text>
          <h2>Brogan</h2>
          </Card.Text>
          <Card.Text>
            Meet Brogan! He is a lovable, gentle, and energetic 2-year old male yellow Labrador Retriever. He is great with adults and children of all ages, as well as other pets. He needs a home and family that will give him ample exercise and stimulation, and a good deal of companionship.
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
              <h2>Dogs</h2>
              <h4>Man's best friend.</h4>
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
              <h2>Cats</h2>
              <h4>Independent, yet cuddly.</h4>
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
              <h2>Rabbits</h2>
              <h4>Hop to a cute new addition to your family.</h4>
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
              <h2>Ferrets</h2>
              <h4>Faster than a speeding bullet.</h4>
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
              <h2>Guinea Pigs</h2>
              <h4>Keep calm and adopt a guinea pig.</h4>
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
              <h2>Hamsters and Gerbils</h2>
              <h4>Don't keep running on the wheel...adopt a hamster or gerbil.</h4>
            </div> 
          </div>
        </div>
        </Col>
        

        
      </Row>

      <Button class="adopt-button" className="link-button" variant="primary" href="/petlist">Adopt a family member today!</Button>

     
    </Container>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Home;