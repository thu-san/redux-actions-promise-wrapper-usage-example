import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import auth, { authSaga } from './auth';

const reducers = combineReducers({
  auth
});

export type AppState = ReturnType<typeof reducers>;

// saga
export const rootSaga = function*() {
  yield all([authSaga()]);
};

export default reducers;
