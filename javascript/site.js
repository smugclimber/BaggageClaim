//============================================================================================================
//BELOW IS INVENTORY BUTTON CODE
//============================================================================================================
$(document).on("click", "#delete", removeTask);
$("input").keypress(function(event) {
  if (event.which === 13) {
    addTask(this);
  }
});

// Function to add a task.
function addTask(button) {
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

}
// When the user clicks any button, run addTask.
$("button").click(function(){
  addTask(this)
});

// Function to remove a task.
function removeTask() {
  $(this).closest("div").remove();
}

//============================================================================================================
//BELOW IS MORE NEW TECH CODE
//============================================================================================================
