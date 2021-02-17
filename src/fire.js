import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCMp7morrTVntt16WnbBL1LyDul5mdQyNI",
    authDomain: "login-registration-860d1.firebaseapp.com",
    projectId: "login-registration-860d1",
    storageBucket: "login-registration-860d1.appspot.com",
    messagingSenderId: "690364774952",
    appId: "1:690364774952:web:d970a4bc75dafa8cc6531d"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;