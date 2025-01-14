import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router";
const AuthorCard = ({_id, nome, cognome, data_di_nascita, email, avatar,islarge=false }) => {
  console.log("Dati author in AuthorCard:", _id); // Log completo dell'oggetto author
  
  return (
    <Col  xs={islarge ? 6 : 3}>
      <Link className="text-decoration-none"  to={`/authors/${_id}`}>
      <Card style={{ width: '11rem' }}>
      <Card.Title >{nome } {cognome}</Card.Title>
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Text className="fw-bold">{email}</Card.Text>
        <Card.Text>
          
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          
        </Card.Text>
        <Card.Text className="fw-bolder">{new Date(data_di_nascita).toLocaleDateString()} </Card.Text>
       
      </Card.Body>
      
    </Card>
    </Link>


    </Col>
  );
};

export default AuthorCard;
