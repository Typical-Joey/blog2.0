import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./post.css";

export default function Post() {
  const post = useLoaderData();

  return (
    <Container>
      <h1>Name: {post.name}</h1>
      <h2>Body: {post.body}</h2>
    </Container>
  );
}
