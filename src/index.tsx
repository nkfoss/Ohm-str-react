import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './store/reducers/workout'

// Here's a line that is necessary for the redux browser extension.
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Here we make the store available for our app, and the browser-extension debugger.
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

// Don't forget to wrap the App with the 'Provider' element, and give the store as a prop!
ReactDOM.render(

  <Provider store={store}>        
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider> ,

  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
