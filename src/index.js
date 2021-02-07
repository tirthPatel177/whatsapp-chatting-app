import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import store from './store';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw28ngEXMIOTR3N16DTAlh48Y-4TbP_zw",
  authDomain: "say-it-d40bb.firebaseapp.com",
  databaseURL: "https://say-it-d40bb-default-rtdb.firebaseio.com",
  projectId: "say-it-d40bb",
  storageBucket: "say-it-d40bb.appspot.com",
  messagingSenderId: "42831643429",
  appId: "1:42831643429:web:1444b52e0ee66fd089d0cc",
  measurementId: "G-2E2DDFRXM0"
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
