import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import App from './App';
import CartItem from './CartItem';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CartItem/>
  </React.StrictMode>,
  document.getElementById('root')
);

