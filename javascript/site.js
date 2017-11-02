//============================================================================================================
//BELOW IS INVENTORY BUTTON CODE
//============================================================================================================
// When the user clicks any button, run addTask.
$("button").click(addTask);

// Add a listener to the document.
// It should keep an ear out for a click on elements with an id of "delete".
// We can't use .click, because the element is dynamically created.
$(document).on("click", "#delete", removeTask);

// When a user presses any key on their keyboard,
$("input").keypress(function(event) {

  // listen to see that key was "enter."
  if (event.which === 13) {

    // If so, run addTask.
    addTask();
  }
});

// Function to add a task.
function addTask() {

  // Get the content (value) of the input box.
  var task = $("#new-task").val();
  var cellTask = $("#cell-task").val();

  // Append that content to the #tasks div.
  // Nest our content in another div in another div
  // with a span containing an X.
  // Notice the id? We can delete the task whenever the user clicks the span.
  $("#tasks").append("<div>" + task + "<span id='delete'>X</span></div>");

  // Clear the content of the input box.
  $("#new-task").val("");
}

// Function to remove a task.
function removeTask() {

  // Grab the closest div to the element that was clicked and remove it.
  // (In this case, the closest element is the one that's encapsulating it.)
  $(this).closest("div").remove();
}

//============================================================================================================
//USER AUTH CODE
//============================================================================================================
(function(){
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBU3UytS_kKst5NLalHGVDVtjCXg1_HIoY",
  authDomain: "mybaggage-b7161.firebaseapp.com",
  databaseURL: "https://mybaggage-b7161.firebaseio.com",
  projectId: "mybaggage-b7161",
  storageBucket: "mybaggage-b7161.appspot.com",
  messagingSenderId: "496506144046"
};
firebase.initializeApp(config);
// firebase signning with popups
// provider
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
// Get DOM elements
    var txtEmail = document.getElementById("txtEmail");
    var txtPassword = document.getElementById('txtPassword');
    var btnLogin = document.getElementById("btnLogin");
    var btnSignUp = document.getElementById('btnSignUp');
    var btnLogout = document.getElementById('btnLogout');
// Add Login event:
     btnLogin.addEventListener( 'click', e => {
      // Get email and pass
       var email = txtEmail.value;
       var pass = txtPassword.value;
       var auth = firebase.auth();
      //  sign-in
      var promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
    });
    // Add SignUp event
    // TODO: CHECK FOR YOUR EMAIL...
    btnSignUp.addEventListener("click", e =>{
      var email = txtEmail.value;
      var pass = txtPassword.value;
      var auth = firebase.auth();
      //  signup
      var promise = auth.createUserWithEmailAndPassword(email, pass);
      promise
      .catch(e => console.log(e.message));
    });
    btnLogout.addEventListener('click', e => {
      console.log('here')
      firebase.auth().signOut().then(function() {
        console.log('should be logged out');
          // Sign-out successful.
        }, function(error) {
          // An error happened.
        });
      })
    // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser =>{
      if(firebaseUser){
        window.location = 'suitcase.html';
        console.log(firebaseUser);
        btnLogout.classList.remove("invisible");
      }
      else{
        console.log("not logged in");
        btnLogout.classList.add("invisible");
      }
    });
  }());
