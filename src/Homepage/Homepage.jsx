import React, { useEffect, useState } from "react";
import "./homepage.css";
import { getAllPosts } from "../services/PostService";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const postsData = await getAllPosts();
      setPosts(postsData);
    }
    getData();
  }, []);

  return (
    <Container className="homepage-container">
      <h1>Home</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      {posts &&
        posts.map((post, index) => {
          return (
            <div key={index}>
              <h1>{post.name}</h1>
              <p>
                {post.body.slice(0, 100)}...
                <button
                  className="btn btn-link"
                  onClick={() => navigate(`/post/${post._id}`)}
                >
                  Read More
                </button>
              </p>
            </div>
          );
        })}
    </Container>
  );
}

export default Homepage;
