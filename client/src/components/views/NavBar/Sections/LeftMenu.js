import React from "react";
import { Menu } from "antd";

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
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

export default LeftMenu;
