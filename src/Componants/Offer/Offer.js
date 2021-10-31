
import React from 'react';
import { ButtonGroup, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Offer.css';
const Offer = (props) => {
    // console.log(props.offer);
    const {placeName, _id, img, travelType,description, cost, duration } = props.offer;
    const link = `addOrder/${_id}`;
    return (
        <div className='offer-container mb-2'>
            <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title className='text-primary'>{placeName.toUpperCase()}</Card.Title>
            <h6 className='text-warning'>Cost: {cost} TK</h6>
            <h6 className='text-success'>Days: {duration}</h6>
            <Card.Text>
             {description.slice(0,100)}
            </Card.Text>
           <Link to={link}><Button variant="primary">Get Offer</Button> </Link>
        </Card.Body>
        </Card>
            
        </div>
    );
};

export default Offer;