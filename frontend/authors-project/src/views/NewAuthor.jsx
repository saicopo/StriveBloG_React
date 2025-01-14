import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import { Container, Row } from "react-bootstrap";
const NewAuthor = () => {
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try{

      
        const newAuthor = {
nome:event.target.formNome.value,
cognome:event.target.formCognome.value,
email:event.target.formEmail.value,
data_di_nascita: new Date(event.target.formData.value),
avatar:"https://picsum.photos/200"
        }
        const response = await fetch("http://localhost:3001/api/authors/new",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newAuthor)
        })
        if(response.ok){{
          throw new Error("errore")
        }
      }}
      catch(error){
        console.log(error);
        
      }

    }
  return (
    <Container>
        <Row>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Enter Nome" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formCognome">
        <Form.Label>Cognome</Form.Label>
        <Form.Control type="text" placeholder="Enter Cognome" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
    </Form.Group>
    

    <Form.Group className="mb-3" controlId="formData">
        <Form.Label>Data di Nascita</Form.Label>
        <Form.Control type="text" placeholder="Enter Data di Nascita" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formAvatar">
        <Form.Label>Avatar</Form.Label>
        <Form.Control type="text" placeholder="Enter Avatar" />
    </Form.Group>

    

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Row>
    </Container>
  );
}

export default NewAuthor;
