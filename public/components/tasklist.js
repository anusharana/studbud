//////////////////////////////////////////////////////////////////////
// *NOTE* All code that regards to div class column-2 is in tasklist.js. 
// This inlcudes sub divs Progress Section, Task Form and Kanban Board.
//////////////////////////////////////////////////////////////////////


// Create const variables to get elements from HTML 
const form = document.getElementById("taskform");
// const button = document.querySelector("#taskform > button");
// WHy doesnt the bellow work? 
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
  
  //Get the value of the 
  // let task = taskInput.value;
  let taskDescription = taskInput.value;
  let dueDate = dueDateInput.value;
  // let completionTime = completionTimeInput.value; not used 
  // let estimatedTime = estimatedTimeInput.value; ///// not used 

  //Options is an array of the drop down options, use selectedIndex to access the user's selected option
  // and store in variable priorityRating
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  // let subjectSelect = subjectSelectInput.options[subjectSelectInput.selectedIndex].value;

  
  //Call addTask function
  // addTask(task, dueDate, estimatedTime, priorityRating, false);
  addTask(taskDescription, dueDate, priorityRating, false);
  
  // console.log(taskList);

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
  //Create HTML elements 

  //This is a list item to populate the unordered list made in HTML file 

  //COME BACK //// Create ablock element and elements within it? 
  var itemBlock = document.createElement("div");
  let itemDescription = document.createElement("span");
  itemDescription.innerHTML = '<p>' + task.taskDescription + '</p>';

  // Task list is the array, wach element holds an object 
  taskList.appendChild(itemDescription);
  // itemBlock.appendChild(itemDescription);


  ////////////////////////////////////////////////////////////////////////////////
  //Add attributes like subject, date and priority here 
  ////////////////////////////////////////////////////////////////////////////////

  // Create HTML element of the task attributes 
  var taskAttSection = document.createElement('div');


  //Create HTML section for the buttons in the itemBlock
  //COME BACK 
  var taskButton = document.createElement('div');

  //Create HTML element of Delete Button 
  let delButton = document.createElement('button');
  delButton.setAttribute('id', 'delButton');
  let delButtonText = document.createTextNode('X');
  // COME BACK - CODE BREAKS WHEN BELOW CODE IS IMPLEMENTED 
  // delButtonText.setAttribute('id', 'delButtonText');
  
  //Append the text to the button element 
  delButton.appendChild(delButtonText);
  //for button to appear on the screen, append button to the item we created
      //itemBlock??
  itemDescription.appendChild(delButton);

  //Event listeners for DOM elements 
  delButton.addEventListener('click', function (event) {
    event.preventDefault();
    //itemBlock??
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

  //Create HTML element of Complete Button 
  // Alter the completion status attribute of object 
  // intertwine logic with progress bar 
  // completionStatus = true;

  //Condition to check whether a task has been added yet
  /////////// come back - MAKE THIS DYNAMIC 
  if (taskListArray.length >= 1) {
    
    //Set display to none to remove prompt in task list section 
    document.getElementById("emptyList").style.display = "none";

  } else {
    //CODE to get he message back once removes? not dynamic COME BACK 
    document.getElementById("emptyList").style.display = "inline-block";
  }



}

//Fill the progress bar based on whether the check button has been selected
//HOW TO STORE THE NUMBER OF TASKS & NUMBER OF BOXES CHECKED FOR PROGRESS BAR

//
var totalTasks = taskListArray.length;


//Condition to check if the checkbox attribute is checked 
// How to do this for many tasks?? 
// select from an array 

// var checked = document.querySelector('tasklist > div ...);
// loop through the task list array - how ot make this dynamic?? 
//if
