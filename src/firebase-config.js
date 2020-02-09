import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCdOrNlpJgLFGBPZHKkXYoZbQHysfO3ydA",
    authDomain: "cvpa-a85af.firebaseapp.com",
    databaseURL: "https://cvpa-a85af.firebaseio.com",
    projectId: "cvpa-a85af",
    storageBucket: "cvpa-a85af.appspot.com",
    messagingSenderId: "1088383747801",
    appId: "1:1088383747801:web:45664720b018697835a0c8",
    measurementId: "G-P1QKYDBBFR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database().ref();