import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { reducer as formReducer } from 'redux-form';

import users from 'services/users/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  users,
  routing: routerReducer,
});

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk, routerMiddleware(browserHistory))),
);

export const history = syncHistoryWithStore(browserHistory, store);
