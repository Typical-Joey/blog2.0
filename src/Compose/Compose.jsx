import React from "react";
import { Container, Form } from "react-bootstrap";
import { createPost } from "../services/PostService";
import { NotificationManager } from "react-notifications";
import "./compose.css";

export default function Compose() {
  async function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const statusCode = await createPost(title, body);
    displayNotification(statusCode);
  }

  function displayNotification(statusCode) {
    if (statusCode === 200) {
      NotificationManager.success("Post Added Successfully!", "SUCCESS", 5000);
    }
    if (statusCode === 404) {
      NotificationManager.error(
        `Status Code: ${statusCode} Not Found`,
        "ERROR",
        5000
      );
    } else if (statusCode >= 400 && statusCode <= 600) {
      NotificationManager.error(
        `Status Code: ${statusCode}, please try again later`,
        "ERROR",
        5000
      );
    }
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
