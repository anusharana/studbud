// Create const variables to get elements from HTML 
// // 
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");

// Create variabales to dynamicly store task input info
var taskInput = document.getElementById("taskInput");
var tasklist = document.getElementById("tasklist");

var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");


// Event listener that stoers the user's input into the array once submit nutton is pressed 
button.addEventListener("click", function(event) {
  event.preventDefault();
  
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  //Options is an array of the drop down options, use selectedIndex to access the user's selected option
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;

  
  //Call the function with hardcoded components
  addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
  console.log(taskList);

})

//Create aray to store tasks
var taskListArray = [];

//Define a function for dynamically creating task objects 
function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {

  //Data creation to populate object paramteres

  let d = new Date();
  let dateCreated = d.getFullYear();
  
  //Create the task object 

    let task = {
      taskDescription,
      dueDate,
      estimatedTime,
      // completionTime, doesnt work with this variable?
      dateCreated,
      priorityRating,
      completionStatus
    };
  
  //Push task object to taskList array 
  taskListArray.push(task);
  renderTask(task);
  // return task; - remove this as now we call the renderTask function, which prints it to the screen 
}

function renderTask(task) {
  //Create HTML elements 

  //This is a list item to populate the unordered lst made in HTML file 
  let item = document.createElement("li");
  item.innerHTML = '<p>' + task.taskDescription + '</p>';

  tasklist.appendChild(item);
  
  
  //Extra task DOM elements to enable more user functionality 
  let delButton = document.createElement('button');
  let delButtonText = document.createTextNode('Delete Task');
    //append the text to the button element 
  delButton.appendChild(delButtonText);
    //for button to appear on the screen, append button to the item we created
  item.appendChild(delButton);

  //Event listeners for DOM elements 
  delButton.addEventListener('click', function (event) {
    event.preventDefault();
    item.remove();
  });
  //Clear the input form 
  form.reset();
}