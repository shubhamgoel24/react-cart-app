import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAQKr-VZbU_IZl1UJuqe4INcixtE8uwdwc",
  authDomain: "cart-8e5e2.firebaseapp.com",
  projectId: "cart-8e5e2",
  storageBucket: "cart-8e5e2.appspot.com",
  messagingSenderId: "400019034615",
  appId: "1:400019034615:web:0635d48cdd9642796b5ef2"
};
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App 
    app = {app}/>
  </React.StrictMode>,
  document.getElementById('root')
);

