import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AuthorCard from "../component/AuthorCard/AuthorCard.component";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const fetchAuthors = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/authors");
     

      const data = await response.json();
      
      setAuthors(data);
      
      
      
    } catch (error) {
      console.log(error);
    }
  };
useEffect(()=>{
  
  fetchAuthors()
}, [])
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Authors</h1>
          </Col>
        </Row>
        <Row className="g-2">
        {authors.map((author) =>(<AuthorCard key={author.id} {...author}/>))}
        </Row>
      </Container>
    </>
  );
};

export default Authors;
