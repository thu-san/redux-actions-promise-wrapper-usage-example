import './App.css';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Auth from './containers/Auth';
import { store } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Auth />
      </Provider>
    );
  }
}

export default App;
