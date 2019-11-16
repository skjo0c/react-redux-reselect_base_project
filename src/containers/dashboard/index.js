import React from "react";
import { connect } from "react-redux";
import { Icon, Table } from "antd";

import { createStructuredSelector } from "reselect";
import { requestAllItems } from "./actions";
import { makeSelectAllItems, makeSelectLoadingItems } from "./selectors";

const { Column } = Table;

export class Dashboard extends React.Component {
  state = {};

  componentDidMount() {
    const { fetchAllItems } = this.props;
    fetchAllItems();
  }

  render() {
    const { allItems, loadingItems } = this.props;

    return (
      <>
        {loadingItems ? (
          <Icon type="loading" className="loading" spin />
        ) : (
          <Table dataSource={allItems}>
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Username" dataIndex="username" key="username" />
            <Column title="Website" dataIndex="website" key="website" />
          </Table>
        )}
      </>
    );
  }
}

// export default Login;

const mapStateToProps = createStructuredSelector({
  allItems: makeSelectAllItems(),
  loadingItems: makeSelectLoadingItems()
});

const mapDispatchToProps = dispatch => ({
  fetchAllItems: () => dispatch(requestAllItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
