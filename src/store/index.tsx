import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers, { rootSaga } from '../reducers';

const newWindow = window as any;

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  newWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
