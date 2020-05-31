import React from "react";
import { Card, Avatar, Icon, Col } from "antd";

const { Meta } = Card;

const BlogCard = (props) => {
  const { blog, index } = props;
  return (
    <Col key={index} lg={8} md={12} xs={24}>
      <Card
        hoverable
        style={{ minWidth: 280, maxWidth:370, marginTop: 16 }}
        actions={[
          // <Icon type="setting" key="setting" />,
          // <Icon type="edit" key="edit" />,
          <a href={`/blog/post/${blog._id}`}>
            <Icon type="ellipsis" key="ellipsis" />
          </a>,
        ]}
      >
        <Meta
          avatar={<Avatar src={blog.writer.image} />}
          title={blog.writer.name}
        />
        <div style={{ height: 150, overflowY: "scroll", marginTop: 10 }}>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </Card>
    </Col>
  );
};

export default BlogCard;
