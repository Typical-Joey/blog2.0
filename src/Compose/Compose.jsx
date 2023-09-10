import React from "react";
import { Container, Form } from "react-bootstrap";
import "./compose.css";

export default function Compose() {
  return (
    <Container className="compose-container">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Super Awesome Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write your post here..."
          />
        </Form.Group>
      </Form>
    </Container>
  );
}
