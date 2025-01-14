import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router';
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Striveblog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-decoration-none">
            
            
           
          
          <Nav.Link >
          <Link className='text-decoration-none' to = "/"> Home </Link>
          </Nav.Link>
          <Nav.Link>
          <Link className='text-decoration-none' to = "/authors"> Authors </Link>
          </Nav.Link>
          <Nav.Link>
          <Link className='text-decoration-none' to = "/new-aurhors"> + Author</Link>
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;