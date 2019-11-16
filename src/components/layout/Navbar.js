import React, { Component } from "react";
import { Link } from "react-router-dom";
// import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button, Icon } from "antd";
import "../../App.css";
import Brand from "../../assets/brand.png";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

class Navbar extends Component {
  state = {
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <nav className="menu">
        <div className="menu__logo">
          <Link to="/">
            <img src={Brand} alt="brand" height="50px" />
          </Link>
        </div>
        <div className="menu__container">
          <div className="menu_left">
            {/* <LeftMenu mode="horizontal" /> */}
          </div>
          <div className="menu_rigth">
            {/* <RightMenu mode="horizontal" isAuthenticated={isAuthenticated} /> */}
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={this.showDrawer}
          >
            <Icon type="menu-fold" />
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            {/* <LeftMenu mode="inline" /> */}
            {/* <RightMenu mode="inline" isAuthenticated={isAuthenticated} /> */}
          </Drawer>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

// export default Navbar;
export default connect(mapStateToProps)(Navbar);
