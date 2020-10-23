import React from 'react';
import {Card} from 'react-bootstrap';

const CardList = ({el}) => {
    return (
        <div>
        <Card
        style={{ width: '15rem', height: "190px", margin: "20px", background: "	#A52A2A", color: "white", padding: "10px",  textAlign: "center",   border: "2px solid black",
        borderRadius: "25px"}}
        className="mb-2"
    >
        <Card.Header>{el.id}</Card.Header>
        <Card.Body>
            <Card.Title> {el.name} </Card.Title>
            <Card.Text>
                <span>{el.userName}</span>
                <span>{el.email}</span>
                <span>{el.phone}</span>
            </Card.Text>
        </Card.Body>
    </Card>
    </div>
    );
}

export default CardList;
