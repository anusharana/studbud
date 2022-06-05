//////////////////////////////////////////////////////////////////////
// *NOTE* All code that regards to div class column-2 is in tasklist.js. 
// This inlcudes sub divs Progress Section, Task Form and Kanban Board.
//////////////////////////////////////////////////////////////////////


// Create const variables to get elements from HTML 
const form = document.getElementById("taskform");
const subButton = document.getElementById("itemSubmit");

// Create variabales to dynamicly store task input info
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

var dueDateInput = document.getElementById("dueDateInput");
// var subjectSelectInput = document.getElementById("subjectInput");
var priorityInput = document.getElementById("priorityInput");
var completionTimeInput = document.getElementById("completionTimeInput");
// var estimatedTimeInput = document.getElementById("estimatedTimeInput");

//Define a function for creating subject tags 

 
// Bind an event to the submit button to capture the information from the form and 
// store it in localStorage
subButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  //Get the value of the task description from object 
  let taskDescription = taskInput.value;
  let dueDate = dueDateInput.value;

  //Options is an array of the drop down options, use selectedIndex to access the user's selected option
  // and store in variable priorityRating
  var priorityRating = priorityInput.options[priorityInput.selectedIndex].value;

  
  //Call addTask function
  addTask(taskDescription, dueDate, priorityRating, false);
  
  console.log(taskList);

});

//Create aray to store tasks
var taskListArray = [];

//Define a function for dynamically creating task objects 
function addTask(taskDescription, dueDate, priorityRating, completionStatus) {

  //Data creation to populate object paramteres
  let d = new Date();
  let dateCreated = d.getFullYear();
  
  //Create the task object 

    let task = {
      taskDescription,
      dueDate,
      // subject,
      // estimatedTime, 
      priorityRating,
      // completionTime,
      completionStatus
    };
  
  //Push task object to taskList array 
  taskListArray.push(task);
  renderTask(task);
  // return task; - remove this as now we call the renderTask function, which prints it to the screen 

}

function renderTask(task) {
  //Create HTML elements for task and task attributes 

  // var itemBlock = document.createElement("div");
  let itemDescription = document.createElement("span");
  itemDescription.setAttribute('class', 'taskItem');
  //Use javascript attribute dragable to allow for draggable funcitonality withit kanban board 
  itemDescription.setAttribute('draggable', 'true');
  itemDescription.innerHTML = '<p>' + task.taskDescription + '</p>';

  ////////////////////////////////////////////////////////////////////////////////
  // Code not working here - would appreciate feedback 
  ////////////////////////////////////////////////////////////////////////////////
  //Select the first direct decendent <p> tag of <span> tag in.taskItem 
  // let descriptionStyle = document.querySelector('span + p');
  // descriptionStyle.setAttribute('class','taskTitle');

  // Task list is the array, wach element holds an object 
  taskList.appendChild(itemDescription);

  // Priotity rating 
  let priorityScale  = document.createElement("p");
  priorityScale.setAttribute('class', 'priorityAtt');
  priorityScale.innerHTML = '<p>' + task.priorityRating + '</p>';
  itemDescription.appendChild(priorityScale);
  //Call function to style priority
  // priorityStyling();

 

  // Due Date 
  let dueDateAtt  = document.createElement("p");
  dueDateAtt.setAttribute('class', 'dueDateAtt');
  dueDateAtt.innerHTML = '<p>' + task.dueDate + '</p>';
  itemDescription.appendChild(dueDateAtt);

  //Create HTML element of Delete Button 
  let delButton = document.createElement('button');
  delButton.setAttribute('id', 'delButton');
  let delButtonText = document.createTextNode('X');
  
  //Append the text to the button element 
  delButton.appendChild(delButtonText);
  itemDescription.appendChild(delButton);
  // taskList.appendChild(delButton);


  //Event listeners for DOM elements 
  delButton.addEventListener('click', function (event) {
    event.preventDefault();
    itemDescription.remove();
  });

  //Create HTML element of the task completion box 
  let checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('id', 'checkBox');
  //append it 
  itemDescription.appendChild(checkBox);


  //Clear the input form once a task has been added to the kanban board 
  form.reset();

  //Condition to show prompt for users by checking whether a task has been added yet
  if (taskListArray.length >= 1) {
    
    //Set display to none to remove prompt in task list section 
    document.getElementById("emptyList").style.display = "none";

  } else {
    //CODE to get he message back once removes? not dynamic COME BACK 
    document.getElementById("emptyList").style.display = "inline-block";
  }



}
//////////////////////////////////////////////////////
// Code is doesn't work - feedback would be appreciated 
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//Progress Bar Calculations 
//////////////////////////////////////////////////////
// Code is faulty, please give feedback on how to code this 

let totalTasks = taskListArray.length;
var percentageTaskComplete = 0;
let markedTaskCount = 0;

function checkMarkedTasks () {
  //For loop to go through all tasks 
  for (i = 0; i < taskListArray.length + 1; i++) {

      // If checkbox is marked, change completionStatus to true 

    if (task.completionStatus == true) {
      //Add styling here 

      markedTaskCount ++;

    }
  }

}


function calculateProgressBar () {

  //If task array length is 0, return 0 percent complete
  if (totalTasks == 0) {
    percentageTaskComplete = 0;

  } else {
    percentageTaskComplete = (markedTaskCount / totalTasks)*100;
    // Alter the styles of the width of progress bar 
    document.querySelector(".progressBarMeasure").style.width = 'percentageTaskComplete';

  }


}

//////////////////////////////////////////////////////
// Code here doesn't work - feedback would be appreciated 
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//Drag and drop functionality for kanban board 
//////////////////////////////////////////////////////

// Code for the drag and drop funcitonality for the taskItem components 
// SRC: https://www.geeksforgeeks.org/html-draggable-attribute/
var draggableItem = document.querySelectorAll('.draggable');
// Select the element where the draggabe item can be stored
var kanbanBoard = document.querySelector('.board');


// Event listener for all draggable elements 
// Using arrow function for event listener call back method
// SRC: https://developpaper.com/how-to-use-the-arrow-function-as-a-callback-to-the-event-listener/
// draggableItem.forEach(draggableItem => {

//   // When the draggable element is picked up by cursor, add class for styling 
//   draggable.addEventListener('dragStart', () => {
//     draggable.classList.add('draggingCurrent');

//   });
//   //When draggable element is dropped, remove the pick u styling 
//   draggable.addEventListener('dragEnd', () => {
//     draggable.classList.remove('draggingCurrent');

//   });



// ////////////////////////////////////////////////////////////////////////////////
// // Create a funciton to allow the task item to be shifted in the order of the <ul> 
// // SRC: https://betterprogramming.pub/create-a-sortable-list-with-draggable-items-using-javascript-9ef38f96b258
// // Call this below function in renderTasks() ?
// // COME BACK HERE - UNFINISHED CODE 
// ////////////////////////////////////////////////////////////////////////////////


// });


//////////////////////////////////////////////////////
// Code here doesn't work - feedback would be appreciated 
///////////////////////////////////////////////////////
//Function which determines the styling of the priority rating
// function priorityStyling() {

//   //Switch statement to determine which stylings to add 
//   var priorityStylingClass;
//   switch (priorityStylingClass) {
//     //Cases are the potential variable held by priorityRating
//     case "Low" :
//       //Add styling of priority rating to PR element 
//       // priorityScale.classList.add('priorityAttLow');
//       priorityStylingClass = priorityAttLow;
//       break;
//     case "Medium" :
//       // priorityScale.classList.add('priorityAttMed');
//       priorityStylingClass = priorityAttMed;
//       break;
//     case "High" :
//       // priorityScale.classList.add('priorityAttHigh');
//       priorityStylingClass = priorityAttHigh;
//       break;

//   }

//   //Add the styling class based on what the variable priorityStylingClass has stored 
//   priorityScale.classList.add('priorityStylingClass');


// }
