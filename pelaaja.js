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