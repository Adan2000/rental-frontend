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


//state in our store can be changed through reducers
//our createStore will take in multiple reducers combined into one reducer the rootReducer
//the root reducer will define how our data is going to be changed in our store

//we then import our reducer.
//then pass that reducer as an argument to our store
//now the state of our app is in our store.

//what if we have multiple states?

//our Provider will pass down the store to any component
//we create a store and give it our provider
//our provider will then provide it to our App 

//Connect allows us to inject that data wherever we need it in our app 
//we only typically pass it our highest component and then pass it down as props 
