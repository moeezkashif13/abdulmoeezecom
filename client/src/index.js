


import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// console.log = function() {
  
// }

// console.log = console.warn = console.error = () => {};


import './index.css';
import App from './App';

import reducer from './store/reducer';
const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <App />

</Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// reportWebVitals();
// Learn more about service workers: https://bit.ly/CRA-PWA