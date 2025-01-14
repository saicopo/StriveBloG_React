import React, { useEffect, useState } from "react";
import { Col, Card, Container, Row } from "react-bootstrap";
import { data, Link, useParams } from "react-router";

const BlogDetail = () => {
  const [blogPosts, setBlogPosts] = useState({});
  const _id = useParams().id;
  const {
    titolo,
    contenuto,
    data_di_pubblicazione,
    email_autore,
    categoria,
    cover,
  } = blogPosts;
  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/blogposts/post/${_id}`
      );
      const data = await response.json();
      setBlogPosts(data);
      console.log(blogPosts);
      console.log(blogPosts);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <h1>Dettagli Articolo:</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Card>
            <Card.Body>
              <Card.Title>{titolo}</Card.Title>
              <Card.Img
                className="img-fluid w-75"
                variant="top"
                src={cover}
              />
              <Card.Text>{contenuto}</Card.Text>
              <Card.Text>Categoria : {categoria}</Card.Text>
              <Card.Text>
                Pubblicato il :{" "}
                {new Date(data_di_pubblicazione).toLocaleDateString()}
              </Card.Text>
              <Card.Text>Pubblicato da : {email_autore}</Card.Text>
              <Link to={`/`} className="btn btn-primary">
                Torna Agli Articoli
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetail;
