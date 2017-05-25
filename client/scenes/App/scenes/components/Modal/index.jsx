import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Modal extends Component {
  static propTypes = {
    user: PropTypes.shape({
      _id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      homeNumber: PropTypes.string,
      workNumber: PropTypes.string,
      mobileNumber: PropTypes.string,
    }),
    handleConfirmToDeleteUser: PropTypes.func,
    deselectUser: PropTypes.func,
  };

  closeModal = () => {
    this.props.deselectUser();
  }

  handleConfirmToDeleteUser = () => {
    const { user, handleConfirmToDeleteUser } = this.props;

    this.closeModal();
    handleConfirmToDeleteUser(user);
  }

  render() {
    const { user } = this.props;

    return (
      <div className={classnames('modal', { 'is-active': Object.keys(user).length > 0 })}>
        <div
          className="modal-background"
          onClick={this.closeModal}
        />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Removal Confirmation</p>
            <button
              className="delete"
              onClick={this.closeModal}
            />
          </header>
          <section className="modal-card-body">
            <h4 className="title is-4">Are you sure you want to remove this user?</h4>
            <h4 className="title is-5">{`${user.firstName} ${user.lastName}`}</h4>
          </section>
          <footer className="modal-card-foot">
            <a
              className="button is-success"
              onClick={this.handleConfirmToDeleteUser}
            >
              Yes
            </a>
            <a
              className="button is-danger"
              onClick={this.closeModal}
            >
              No
            </a>
          </footer>
        </div>
      </div>
    );
  }
}
