import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import BlogCard from "../component/BlogCard/BlogCard";
import { Link, useParams } from "react-router";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState({ authorSearch: "", titleSearch: "" });

  const page = useParams().page ?? 1;

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/blogposts/page/" + page
      );

      const data = await response.json();
      console.log("Dati ricevuti dalla fetch:", data);
      console.log("caxz");

      setBlogPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchBlogPostsNumber = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/blogposts/count");

      const data = await response.json();

      setPageCount(data);
    } catch (error) {
      console.log(error);
    }
  };
  const searchBlogPosts = async () => {
    const response = await fetch(
      `http://localhost:3001/api/blogposts/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(search),
      }
    );
    const data = await response.json();
    setBlogPosts(data);
  };
  const handleSearch = (event) => {
    
    setSearch({ ...search, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    fetchBlogPosts();
    fetchBlogPostsNumber();
  }, [page]);

  // useEffect(() => {
  //   searchBlogPosts();
  // }, [search]);

  return (
    <Container>
      <Row className="m-3  d-flex">
        <Col xs="auto">
          <Form.Control
            name="titleSearch"
            type="text"
            placeholder="Cerca per titolo"
            className=" mr-sm-2"
            onChange={handleSearch}
            value={search.titleSearch}
          />
        </Col>
        <Col xs="auto">
          <Form.Control
            name="authorSearch"
            type="text"
            placeholder="Cerca per autore"
            className=" mr-sm-2"
            onChange={handleSearch}
            value={search.authorSearch}
          />
        </Col>
        <Col xs="auto">
          <Button onClick={searchBlogPosts} type="submit">Cerca</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Tutti i Post degli Authori:</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-wrap">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          {Array.from({ length: pageCount }).map((_, index) => (
            <Link
              key={index + 1}
              className="m-2 text-decoration-none"
              to={`/${index + 1}`}
            >
              Pagina {index + 1}
            </Link>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default BlogList;
