import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAdJLlG4yXVYv4Ccnpi86BXk_znL75E5kg",
  authDomain: "cart-4f18a.firebaseapp.com",
  projectId: "cart-4f18a",
  storageBucket: "cart-4f18a.appspot.com",
  messagingSenderId: "916711745416",
  appId: "1:916711745416:web:efb4907aa4fcb656ce3c3d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
