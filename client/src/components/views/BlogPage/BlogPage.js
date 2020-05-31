import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Row } from "antd";
import BlogCard from "./BlogCard";

const { Title } = Typography;

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("api/blog/getBlogs").then((response) => {
      if (response.data.success) {
        console.log(response);
        setBlogs(response.data.blogs);
      } else {
        alert("Get's blogs failed");
      }
    });
  });

  const renderCards = blogs.map((blog, index) => {
    return <BlogCard blog={blog} index={index} />;
  });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2}> Artykuły</Title>
      <Row gutter={[32, 16]}>{renderCards}</Row>
    </div>
  );
};

export default BlogPage;
