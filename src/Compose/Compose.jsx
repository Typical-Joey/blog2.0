import React from "react";
import { Container, Form } from "react-bootstrap";
import "./compose.css";

export default function Compose() {
  return (
    <Container className="compose-container">
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Super Awesome Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="body">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="Write your post here..."
          />
        </Form.Group>
        <button className="submit-button">Post</button>
      </Form>
    </Container>
  );
}
