import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const remove = (user, handleAskToDeleteUser) => {
  handleAskToDeleteUser(user);
};

const UserItem = ({ user, handleAskToDeleteUser }) => (
  <div className="column is-3">
    <div className="card">
      <header className="card-header">
        <h4 className="card-header-title">
          <Link
            to={`/users/${user._id}/edit`}
            className="title is-4 has-text-centered"
          >
            {`${user.firstName} ${user.lastName}`}
          </Link>
        </h4>
      </header>
      <footer className="card-footer">
        <Link
          to={`/users/${user._id}/edit`}
          className="card-footer-item"
        >
          Edit
        </Link>
        <a
          className="card-footer-item"
          onClick={() => remove(user, handleAskToDeleteUser)}
        >
          Delete
        </a>
      </footer>
    </div>
  </div>
);

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  handleAskToDeleteUser: PropTypes.func,
};

export default UserItem;
