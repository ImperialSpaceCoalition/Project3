import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function PetCard(props) {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Animal Name</Card.Title>
        <Card.Text>
          A brief explanation of the animal's personality and needs for a home and family.
        </Card.Text>
        <Button variant="primary">Adopt</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default PetCard;