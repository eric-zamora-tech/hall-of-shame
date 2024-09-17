import React from 'react';
import Card from 'react-bootstrap/Card'

const ShameCard = ({ title, content }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <hr></hr>
                <Card.Text>{content}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ShameCard;