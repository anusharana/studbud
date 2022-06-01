// Declare variables for the timer 
var minutes = 25;
var seconds = "00";

//Global scope of variables so it can be used dynamically in other funcitons 
var minutesInterval;
var secondsInterval;

// Sounds for the start and end of pomodoro session 
// Contructor returns new HTML Audio element as instructed in paranthesis 
// var startSound = new Audio("sound/start.wav");
// var bellSound = new Audio("sound/bell.wav");
var startSound = document.getElementById('startSound');
var endSound = document.getElementById('endSound');

//Declare variables of button elements 
var startTimerButton = document.getElementById("timerButtonStart");
// var pauseButton = document.getElementById("timerButtonStart");
var resetTimerButton = document.getElementById("timerButtonReset");


// "DOMContentLoaded" attribute to make sure the event is sent once 
// the HTML document has finished loading. Global scope. 
document.addEventListener("DOMContentLoaded", pomodoro());

function pomodoro () {
  document.getElementById("timerMinutes").innerHTML = minutes;
  document.getElementById("timerSeconds").innerHTML = seconds;
  
}

//Call startButton() function once the play button is hit
startTimerButton.addEventListener("click", startButton);

function startButton () {
  //User clicks play button, sound occurs 
  startSound.play();

  //HELP HERE Update the play icon to the pause icon 
  // cant use classList as I have used ID's to signify the different types of buttons 
  // also, if i were to change them to classes, how can i style the below icon? 
    //   document.querySelector(".timerButton .timerButtonStart").classList.remove("timerButtonStart");
    //   document.querySelector(".timerButton").innerHTML = `<span class="material-icons">pause</span> `;

  //Declare new variables for timer 
  // As the setInterval function waits 60000 ms to call minutesTimer, we must update the variable so it displays correct countdown time  
  var minutes = 24;
  var seconds = 59;

  //Update the minutes and seconds HTML variables to count down 
  document.getElementById("timerMinutes").innerHTML = minutes;
  document.getElementById("timerSeconds").innerHTML = seconds;

  //Call setInterval function to call respective functions (minutes or seconds) to update the clock at correct times 
  minutesInterval = setInterval(minutesTimer, 60000);
  secondsInterval = setInterval(secondsTimer, 1000);

  function minutesTimer() {
    minutes = minutes - 1;
    document.getElementById("timerMinutes").innerHTML = minutes;
  }

  function secondsTimer() {
    seconds = seconds - 1;
    document.getElementById("timerSeconds").innerHTML = seconds;

    // COME BACK - FIX NUMBERS WHEN NOT TESTING 
    //Condition to ensure seconds doesn't go into negatives, clocks back to 60 once 0 has been reached. 
    if (seconds <= 50) {
      //Once the 25 min session is over, clear the interval and show a message to take a break 
      if (minutes <= 24) {
        clearInterval(minutesInterval);
        clearInterval(secondsInterval);

        //Play bell when each session has been completed 
        endSound.play();

        //HOW TO COUNT THE OCCURANCE OF THIS
        //COME BACK - concatenate the string with logic
        // if loop? while?  " X more sessions to go" 
        // Dynamically show a message once 25 min session is complete 
        document.getElementById("timerComplete").innerHTML = "Session complete! Enjoy your 5 min break :)";
        

        //To ensure the class timer_complete_message is shown dynamically, add it to the Element ID once the above conditions are met 
        document.getElementById("timerComplete").classList.add("timerCompleteMessage");
        
      }
      
      seconds = 60;
    }
  }
}

//Call setInterval function to call respective functions (minutes or seconds) to update the clock at correct times 
//////////////////////////////////////////////
// var minutesInterval = setInterval(minutesTimer, 60000);
// var secondsInterval = setInterval(secondsTimer, 1000);
// DID ABOVE TO REDFINE THE MINUTESINTERVAL VARIABLE, UNSURE WHY NOT REGISTERING

//Call resetButton() function once the play button is hit
resetTimerButton.addEventListener("click", resetButton);

// If reset btn is clicked, clear the intervals 
 function resetButton () {
    clearInterval(minutesInterval);
    clearInterval(secondsInterval);
    
    minutes = 25;
    seconds = "00";

    pomodoro ();

 }