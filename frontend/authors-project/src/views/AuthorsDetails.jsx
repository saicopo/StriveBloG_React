import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useParams,useNavigate, redirect } from "react-router";
const AuthorsDetails = () => {
  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [data_di_nascita, setData_di_nascita] = useState("");
  const [avatar, setAvatar] = useState("");

  const author = { nome, cognome, email, data_di_nascita, avatar };
 const redirect = useNavigate();


  const fetchAuthor = async () => {
    try{
    const response = await fetch(`http://localhost:3001/api/authors/${id}`);
    
    if(!response.ok){
      redirect("/authors");
      throw new Error("errore")
      
    };
    const author = await response.json();
    setNome(author.nome);
    setCognome(author.cognome);
    setEmail(author.email);
    setData_di_nascita(author.data_di_nascita);
    setAvatar(author.avatar);}
    catch(error){
      console.log(error);}
  };
  const putAuthor = async (event) => {
    try {
      const response = await fetch(`http://localhost:3001/api/authors/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(author),
      });
      if (!response.ok) {
        throw new Error("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };

const deleAuthor = async (event) => {
  try {
    const response = await fetch(`http://localhost:3001/api/authors/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("errore");
    }
    redirect("/authors")
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    fetchAuthor();
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Author Details</h1>
          </Col>
        </Row>
        <Row xs={6}>
          <h3>Modifica Autore</h3>
          <Col>
            <p>{author.nome}</p>
            <p>{author.cognome}</p>
            <p>{author.email}</p>
            <p>
              Nato Il:{new Date(author.data_di_nascita).toLocaleDateString()}
            </p>
            <img src={author.avatar} alt="acatar" />
            <Form >
              <Form.Group className="mb-3" controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter New Nome"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCognome">
                <Form.Label>Cognome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter New Cognome"
                  value={cognome}
                  onChange={(event) => setCognome(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter   New Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formData">
                <Form.Label>Data di Nascita</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter New Data di Nascita"
                  value={new Date(data_di_nascita).toLocaleDateString()}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAvatar">
                <Form.Label>Avatar</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter New Avatar"
                  value={avatar}
                  onChange={(event) => setAvatar(event.target.value)}
                />
              </Form.Group>

              <Button variant="primary" onClick={putAuthor}>
                Modifica Author
              </Button>
              <Button className="mt-3" variant="danger" type="submit"
              onClick={deleAuthor}>
                
                Cancella Author
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>{" "}
    </>
  );
};

export default AuthorsDetails;
