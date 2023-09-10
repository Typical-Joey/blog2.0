import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./post.css";

export default function Post() {
  const post = useLoaderData();

  return (
    <Container className="post-container">
      <h1>{post.name}</h1>
      <p>{post.body}</p>
    </Container>
  );
}
