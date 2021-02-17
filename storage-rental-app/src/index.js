import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter as Router} from 'react-router-dom'

import {createStore} from 'redux'
import {applyMiddleware} from 'redux'
import {compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import unitReducer from '../src/reducers/unitReducer'
import 'bootstrap/dist/css/bootstrap.min.css';


const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(unitReducer, composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router>
      <App />
      </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
