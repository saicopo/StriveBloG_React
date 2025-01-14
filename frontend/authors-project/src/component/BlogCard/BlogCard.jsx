import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router";



const BlogCard = ({
  _id,
  titolo,
  contenuto,
  data_di_pubblicazione,
  email_autore,
  categoria,
  cover,
}) => {
  return (
    <Col xs={4}>
      <Card>
        <Card.Body>
          <Card.Title>{titolo}</Card.Title>
          <Card.Img className="img-fluid w-75" variant="top" src={cover} />
          <Card.Text>{contenuto}</Card.Text>
          <Card.Text>Categoria : {categoria}</Card.Text>
          <Card.Text>Pubblicato il : {new Date(data_di_pubblicazione).toLocaleDateString()}</Card.Text>
          <Card.Text>Pubblicato da : {email_autore}</Card.Text>
          <Link to={`/blogpost/${_id}`}className="btn btn-primary">
            Vai All'Articolo
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
