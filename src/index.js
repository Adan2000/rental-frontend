import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose } from 'redux'
import  rootReducer  from './redux/reducers/rootReducer'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));

