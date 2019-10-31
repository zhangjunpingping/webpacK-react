import React, { Component } from "react";
import { Menu, Icon, Layout } from "antd";
import { withRouter, Link } from "react-router-dom";
import menu from "./navigator";

const { SubMenu } = Menu;
const { Sider } = Layout;

class SideMenu extends Component {
  // 递归生成左侧菜单树
  recurMenu = routerArr =>
    routerArr.map(item => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu
            key={item.path}
            onTitleClick={this.handleSubMenuChange}
            title={
              <span>
                <span>{item.title}</span>
              </span>
            }
          >
            {this.recurMenu(item.children)}
          </SubMenu>
        );
      }
      if (item.path === "/") {
        return "";
      }
      return (
        <Menu.Item key={item.path} onClick={this.handleMenuItemClick}>
          {item.icon && <Icon type={item.icon} />}
          <Link style={{ display: "inline-block" }} to={item.path}>
            {item.title}
          </Link>
        </Menu.Item>
      );
    });

  render() {
    return (
      <Sider className="menu-content" width={256}>
        <Menu onClick={this.handleClick} style={{ width: 256 }} mode="inline">
          {this.recurMenu(menu)}
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(SideMenu);
