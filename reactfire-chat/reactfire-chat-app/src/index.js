import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import FirebaseHelper from './util/FirebaseHelper'
import './index.css';

import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD4zYfQ8ke5saxArZJdmvi48hJmTAYOr0o",
    authDomain: "reactfire-chat-app.firebaseapp.com",
    databaseURL: "https://reactfire-chat-app.firebaseio.com",
    storageBucket: "reactfire-chat-app.appspot.com",
    messagingSenderId: "315160197073"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

window.onload = function() {
  window.FirebaseHelper = new FirebaseHelper();
};

