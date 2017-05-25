import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from 'scenes/App';
import NoMatch from 'scenes/App/scenes/NoMatch';
import UsersList from 'scenes/App/scenes/UsersList';
import UserAdd from 'scenes/App/scenes/UserAdd';
import UserEdit from 'scenes/App/scenes/UserEdit';
import { store, history } from 'services/store';

import 'bulma/bulma.sass';
import 'font-awesome/scss/font-awesome.scss';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={UsersList} />
        <Route path="users/:id/edit" component={UserEdit} />
        <Route path="users/add" component={UserAdd} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root'),
);
