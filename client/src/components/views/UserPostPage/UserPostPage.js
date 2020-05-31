import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Row } from "antd";
import BlogCard from "../BlogPage/BlogCard";

const { Title } = Typography;

const UserPostPage = (props) => {
  const userId = props.match.params.userId;
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const variables = { userId: userId };

    axios.post("/api/blog/getUserBlogs", variables).then((response) => {
      if (response.data.success) {
        console.log(response);
        setBlogs(response.data.blogs);
      } else {
        alert("Get's blogs failed");
      }
    });
  }, []);

  const renderCards = blogs.map((blog, index) => {
    return <BlogCard blog={blog} index={index} />;
  });
  if (blogs.length) {
    return (
      <div style={{ width: "85%", margin: "3rem auto" }}>
        <Title level={2}>Twoje artykuły</Title>
        <Row gutter={[32, 16]}>{renderCards}</Row>
      </div>
    );
  } else {
    return <div style={{ width: "80%", margin: "3rem auto" }}>loading...</div>;
  }
};

export default UserPostPage;
