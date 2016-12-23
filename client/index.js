const React = require('React');
const Reactdom = require('react-dom');
const { Provider } = require('react-redux');
const App = require('./app.js');
const { createStore } = require('redux');
const rootReducer = require('./reducers');

const store = createStore(rootReducer);

Reactdom.render(
  <Provider store={store} >
    <App />
  </ Provider>
  , document.getElementById('app')
);
