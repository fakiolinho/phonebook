import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import _isEqual from 'lodash/isEqual';

import { getUsers, removeUser, selectUser, deselectUser } from 'services/users/actions';
import Modal from '../components/Modal';
import UserItem from './components/UserItem';

export class UsersList extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.object,
    ),
    getUsers: PropTypes.func,
    loading: PropTypes.bool,
    removeUser: PropTypes.func,
    selectedUser: PropTypes.object,
    selectUser: PropTypes.func,
    deselectUser: PropTypes.func,
  };

  componentDidMount() {
    this.props.getUsers();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_isEqual(nextProps.users, this.props.users) || !_isEqual(nextProps.selectedUser, this.props.selectedUser);
  }

  handleAskToDeleteUser = (user) => {
    this.props.selectUser(user);
  }

  handleConfirmToDeleteUser = (user) => {
    this.props.removeUser(user._id);
  }

  renderContent() {
    const { users, loading, selectedUser, deselectUser } = this.props;

    if (loading) {
      return (
        <div className="card">
          <div className="card-content">
            <div className="content has-text-centered">
              <h3 className="title">Loading Users</h3>
              <span className="icon is-large"><i className="fa fa-refresh fa-spin" /></span>
            </div>
          </div>
        </div>
      );
    }

    if (users.length > 0) {
      return (
        <div className="users-list columns is-multiline">
          {users.map(user => (
            <UserItem
              user={user}
              key={user._id}
              handleAskToDeleteUser={this.handleAskToDeleteUser}
            />
          ))}
          <Modal
            user={selectedUser}
            deselectUser={deselectUser}
            handleConfirmToDeleteUser={this.handleConfirmToDeleteUser}
          />
        </div>
      );
    }

    return (
      <div className="card">
        <div className="card-content">
          <div className="content has-text-centered">
            <h1 className="title">No users found</h1>
            <p>
              <span className="icon is-large"><i className="fa fa-users" /></span>
            </p>
            <Link to="users/add" className="button is-medium is-outlined is-primary">Add a User</Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.users.list.loading,
  users: state.users.list.data,
  selectedUser: state.users.remove.data,
});

const mapDispatchToProps = dispatch => ({
  getUsers: bindActionCreators(getUsers, dispatch),
  removeUser: bindActionCreators(removeUser, dispatch),
  selectUser: bindActionCreators(selectUser, dispatch),
  deselectUser: bindActionCreators(deselectUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
