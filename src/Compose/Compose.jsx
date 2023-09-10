import React from "react";
import { Container, Form } from "react-bootstrap";
import { createPost } from "../services/PostService";
import "./compose.css";

export default function Compose() {
  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const response = createPost(title, body);
    console.log(response);
  }

  return (
    <Container className="compose-container">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Super Awesome Title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="body">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            name="body"
            placeholder="Write your post here..."
          />
        </Form.Group>
        <button className="submit-button" type="submit">
          Post
        </button>
      </Form>
    </Container>
  );
}
