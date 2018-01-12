# BaggageClaim
### [Live Website: https://smugclimber.github.io/BaggageClaim/]

created by [Nick H](https://github.com/smugclimber)

#### key libraries and tech <br>
Git / Github <br>
jQuery <br>
Bootstrp <br>
Velocity.js <br>
FireBase <br>
Javascript <br>


#### about this project
Baggage Claim was my first project ever built during my web development coursework. It delvs into Basics of HTML, CSS, and basic jQuery functionality. The core features for this application are user authentication through Google's Firebase and accountability of your travel belongings. If Users go abroad or on a weekend trip, Baggage Claim can help them with accountability of their belongings with the goal of preventing lost items, or providing documentation to insurance companies and authorities if things are lost or stolen. Give it a spin, you might enjoy it!

### code
The code snippet below was my attempt at making the submission system work and display the user's inventory as well as offer the user premade inventory items. The database inventory never fully launched, but the User Auth DB and the jQuery inventory list creation works just fine :)
#### apiChallenge
code below is quoted from: server.js
```
$(document).on("click", "#delete", removeTask);
$("input").keypress(function(event)
  {
    if (event.which === 13) {
      addTask(this);
    }
  });

// Function to add a task.
function addTask(button)
{
  var task;
  value = $(button).attr("value");
  // Get the content (value) of the input box.
  if ($(button).attr("id") === "add" || $(button).attr("id")==="new-task"){
    task = $("#new-task").val();
    // Clear the content of the input box.
    $("#new-task").val("");
  } else{
    task = value
  }
  // Append that content to the #tasks div.
  $("#tasks").append("<div>" + task + "<span id='delete'>CLEAR</span></div>");
  addToDB(task);
};

function addToDB(task){
// Initializing our click count at 0
  var item1 = 0;
  item1 = task;
  console.log(task);

  // **** Store Click Data to Firebase in a JSON property called clickCount *****
  // **** Note how we are using the Firebase .set() method ****
  // **** .ref() refers to the path you want to save your data to
  // **** Since we left .ref() blank, it will save to the root directory
  database.ref().set({
    dbItem1: item1
});
}
// When the user clicks any button, run addTask.
$("button").click(function(){
  addTask(this)
});

// DB CODE
var mainText = document.getElementById("task");

function writeUserData(){
  var firebaseRef = firebase.database().ref();
  firebaseRef.child('text').set('some value') = task;
}
// DB CODE

// Function to remove a task.
function removeTask() {
  $(this).closest("div").remove();
}

</script>
</body>
</html>
```
