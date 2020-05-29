import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Icon, Avatar, Col, Typography, Row } from "antd";

const { Title } = Typography;

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("api/blog/getBlogs").then();
  });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2}> Blog Lists</Title>
      <Row gutter={[32, 16]}>{/*{renderCards}*/}</Row>
    </div>
  );
};

export default BlogPage;
