import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt_pFn-B_7boglW4ThHNaFF54_pLkjeNU",
  authDomain: "farmsim-50260.firebaseapp.com",
  databaseURL: "https://farmsim-50260-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "farmsim-50260",
  storageBucket: "farmsim-50260.appspot.com",
  messagingSenderId: "407008051577",
  appId: "1:407008051577:web:d15731390ee2f306fb6fa8",
  measurementId: "G-ZKFZCY3V3E"
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