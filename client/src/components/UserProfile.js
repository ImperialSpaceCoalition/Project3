import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Mock data
const mockData = {
  "users": [
    {
      "username": "john_doe",
      "email": "john@example.com",
      "password": "password1"
    },
    {
      "username": "jane_smith",
      "email": "jane@example.com",
      "password": "password2"
    },
    {
      "username": "alex_jackson",
      "email": "alex@example.com",
      "password": "password3"
    },
    {
      "username": "emma_wilson",
      "email": "emma@example.com",
      "password": "password4"
    },
    {
      "username": "michael_brown",
      "email": "michael@example.com",
      "password": "password5"
    }
  ],
  "posts": [
    {
      "title": "Post 1",
      "content": "This is the content of post 1.",
      "author": "john_doe"
    },
    {
      "title": "Post 2",
      "content": "This is the content of post 2.",
      "author": "jane_smith"
    },
    {
      "title": "Post 3",
      "content": "This is the content of post 3.",
      "author": "alex_jackson"
    },
    {
      "title": "Post 4",
      "content": "This is the content of post 4.",
      "author": "emma_wilson"
    },
    {
      "title": "Post 5",
      "content": "This is the content of post 5.",
      "author": "michael_brown"
    }
  ]
};

function UserProfile({ isAuthenticated }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Set mock posts data
    setPosts(mockData.posts);
  }, []);

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Card.Title>
            {/* Left column content */}
          </Card.Title>
          <Card>
            <Card.Body>
              {/* Render posts from mock data */}
              {posts.map((post, index) => (
                <div key={index}>
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                  {/* Render author (assuming the author's username is displayed) */}
                  <p>Author: {post.author}</p>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8}>
          {isAuthenticated && (
            <div>
              {/* Right column content */}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;