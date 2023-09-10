import React, { useEffect, useState } from "react";
import "./homepage.css";
import { getAllPosts } from "../services/PostService";
import { Container } from "react-bootstrap";

function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const postsData = await getAllPosts();
      setPosts(postsData);
    }
    getData();
  }, []);

  return (
    <Container>
      <h1>Homepage</h1>
      {posts &&
        posts.map((post, index) => {
          return <div key={index}>{post.name}</div>;
        })}
    </Container>
  );
}

export default Homepage;
