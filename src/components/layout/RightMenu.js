import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Menu } from "antd";
import { withRouter } from "react-router-dom";

class RightMenu extends Component {
  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return (
        <Menu
          mode={this.props.mode}
          defaultSelectedKeys={[this.props.location.pathname]}
        >
          <Menu.Item key="/">
            <Link to="/">All Items</Link>
          </Menu.Item>
          <Menu.Item key="/create_item">
            <Link to="/create_item">Create Item</Link>
          </Menu.Item>
          <Menu.Item key="/myposts">
            <Link to="/myposts">My Items</Link>
          </Menu.Item>
          <Menu.Item key="/profile">
            <Link to="/profile">My Profile</Link>
          </Menu.Item>
          <Menu.Item key="/logout">
            <Link to="/logout">Log Out</Link>
          </Menu.Item>
        </Menu>
      );
    }
    return (
      <Menu
        mode={this.props.mode}
        defaultSelectedKeys={[this.props.location.pathname]}
      >
        <Menu.Item key="/">
          <Link to="/">All Items</Link>
        </Menu.Item>
        <Menu.Item key="/login">
          <Link to="/login">Signin</Link>
        </Menu.Item>
        <Menu.Item key="/register">
          <Link to="/register">Signup</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

RightMenu.propTypes = {
  mode: PropTypes.string,
  isAuthenticated: PropTypes.bool
};

export default withRouter(RightMenu);
