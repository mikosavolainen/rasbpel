import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDfkJvO-fL1sTYl7AKyPN4BpVzBRSdNV3w",
  authDomain: "rasbel-c7e93.firebaseapp.com",
  projectId: "rasbel-c7e93",
  storageBucket: "rasbel-c7e93.appspot.com",
  messagingSenderId: "555204065537",
  appId: "1:555204065537:web:69bd0d512823d0bc318300",
  measurementId: "G-J35ZT3CLP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Listen to the form submit event
$('#pelaajakirjautuminen').submit(function(evt) {

    // Target the form elements by their ids
    // And build the form object like this using jQuery: 
    var formData = {
      "nimi": $('#nimi').val(),
      "nimi2": $('#nimi2).val(),
    }
  
    evt.preventDefault(); //Prevent the default form submit action
    
    // You have formData here and can do this:
    firebase.initializeApp(config); //Initialize your firebase here passing your firebase account config object
    firebase.database().ref('/formDataTree').push( formData ); // Adds the new form data to the list under formDataTree node
  })