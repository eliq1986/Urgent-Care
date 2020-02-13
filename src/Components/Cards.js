import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


const Cards = (props)=> {
  const { image, title, text, buttonText} = props.eachCard;
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
      {text}
      </Card.Text>
      <Button variant="primary" onClick={()=> props.showList()}>{buttonText}</Button>
    </Card.Body>
    </Card>
 );
}



export default Cards;
