import React from "react";
import { Menu } from "antd";
import { useSelector } from "react-redux";

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  const user = useSelector((state) => state.user);
  let us;
  if (user.userData) {
    us = {
      _id: user.userData._id,
    };
  }

  if (user.userData && user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/">Strona główna</a>
        </Menu.Item>
        <Menu.Item key="blog">
          <a href="/blog">Blog</a>
        </Menu.Item>
        <Menu.Item key="userPosts">
          <a href={`/blog/user/post/${us._id}`}>Twoje artykuły</a>
        </Menu.Item>
        <Menu.Item key="create">
          <a href="/blog/create">Stwórz</a>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/">Strona główna</a>
        </Menu.Item>
        <Menu.Item key="blog">
          <a href="/blog">Blog</a>
        </Menu.Item>
        <Menu.Item key="create">
          <a href="/blog/create">Stwórz</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;
