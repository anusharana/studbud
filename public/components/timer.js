// Declare variables for the timer 
var minutes = 25;
var seconds = "00";

//Global scope of variables so it can be used dynamically in other funcitons 
var minutesInterval;
var secondsInterval;
var sessionCount = 0;

// Sounds for the start and end of pomodoro session 
var startSound = document.getElementById('startSound');
var endSound = document.getElementById('endSound');

//Declare variables of button elements 
var startTimerButton = document.getElementById("timerButtonStart");
var resetTimerButton = document.getElementById("timerButtonReset");

//Timer complete DOM element
let timerComplete = document.getElementById("timerComplete");


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



  //Declare new variables for timer 
  // As the setInterval function waits 60000 ms to call minutesTimer, we must update the variable so it displays correct countdown time  
  var minutes = 24;
  var seconds = 59;

  //Update the minutes and seconds HTML variables to count down 
  document.getElementById("timerMinutes").innerHTML = minutes;
  document.getElementById("timerSeconds").innerHTML = seconds;

  //Call setInterval function to call respective functions (minutes or seconds) to update the clock at correct times 
  // SRC: https://theprogrammingexpert.com/javascript-countdown-timer/
  minutesInterval = setInterval(minutesTimer, 60000);
  secondsInterval = setInterval(secondsTimer, 1000);

  function minutesTimer() {
    minutes = minutes - 1;
    document.getElementById("timerMinutes").innerHTML = minutes;
  }


  function secondsTimer() {
    seconds = seconds - 1;
    document.getElementById("timerSeconds").innerHTML = seconds;

    //Condition to ensure seconds doesn't go into negatives, clocks back to 60 once 0 has been reached. 
    if (seconds <= 00) {
      //Once the 25 min session is over, clear the interval and show a message to take a break 
      if (minutes <= 00) {
        clearInterval(minutesInterval);
        clearInterval(secondsInterval);

        //Play bell when each session has been completed 
        endSound.play();

        //Incremement sessionCount
        sessionCount ++;
        //if condition to ensure the sessionCount is no more than 4 to indicate a 
        //2 hour study session 
        if (sessionCount == 4) {
          //Reset the sessionCount number 
          sessionCount == 0;


        } 

       //Alter the message
        timerComplete.innerHTML = "Session " + sessionCount + " complete! Enjoy your 5 min break :) \n Press anywhere on this bar to continue your sessions. Only" + (4-sessionCount) +" sessions to go";
        
        //To ensure the class timer_complete_message is shown dynamically, add it to the Element ID once the above conditions are met 
        timerComplete.classList.add("timerCompleteMessage");

        
      }
      //Reset seconds counter back to 60 once the full minute has elapsed
      seconds = 60;
    }
  }
}



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

 //Event listener so user can click the session complete message to resume the next session 
 timerComplete.addEventListener("click", () => {

    //When the timer complete message is clicked, trigger the start button functionality
    // to reset the timer to 25
    startButton();
    //Add the fade out animation once the user has clicked on the notification 
    timerComplete.classList.add("timerCompleteDissolve");




 });






