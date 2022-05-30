// Declare variables for the timer 
var minutes = 25;
var seconds = "00";

// Sound for start and end of pomodoro session 
var start = new Audio("./sound/start.wav");
var bell = new Audio("/sound/bell.wav");

//Variables for control and reset buttons - COME BACK 
var control_btn = document.querySelector(".timer__btn--control");
var reset_btn = document.querySelector(".timer__btn--reset");


function pomodoro () {
  document.getElementById("timer_minutes").innerHTML = minutes;
  document.getElementById("timer_seconds").innerHTML = seconds;
  
}

function start_btn () {
  //User clicks play button, sound occurs 
  start.play();

  //HELP HERE Update the play icon to the pause icon 
  // document.querySelector("timer-btn").classList.remove("timer__btn--start");
  // document.querySelector("timer-btn").innerHTML = `<span class="material-icons">pause</span> `;

  //Declare new variables for timer 
  // As the setInterval function waits 60000 ms to call minutesTimer, we must update the variable so it displays correct countdown time  
  var minutes = 24;
  var seconds = 59;

  //Update the minutes and seconds HTML variables to count down 
  document.getElementById("timer_minutes").innerHTML = minutes;
  document.getElementById("timer_seconds").innerHTML = seconds;

  //Call setInterval function to call respective functions (minutes or seconds) to update the clock at correct times 
  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  function minutesTimer() {
    minutes = minutes - 1;
    document.getElementById("timer_minutes").innerHTML = minutes;
  }

  function secondsTimer() {
    seconds = seconds - 1;
    document.getElementById("timer_seconds").innerHTML = seconds;

    // COME BACK - FIX NUMBERS WHEN NOT TESTING 
    //Condition to ensure seconds doesn't go into negatives, clocks back to 60 once 0 has been reached. 
    if (seconds <= 57) {
      //Once the 25 min session is over, clear the interval and show a message to take a break 
      if (minutes <= 24) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        //Play bell when each session has been completed 
        bell.play();

        //HOW TO COUNT THE OCCURANCE OF THIS
        // Dynamically show a message once 25 min session is complete 
        document.getElementById("timer_complete").innerHTML = "Session complete! Take a 5 min break"

        //To ensure the class timer_complete_message is shown dynamically, add it to the Element ID once the above conditions are met 
        document.getElementById("timer_complete").classList.add("timer_complete_message");
        
      }
      
      seconds = 60;
    }
  }
}

// If reset btn is clicked, clear the intervals 
 function reset_btn () {
   clearInterval(minutes_interval);
   clearInterval(seconds_interval);

 }

  // //Reset Button 
  // document.querySelector("timer__btn--control");

  // //Control Button
  // document.querySelector("timer__btn--reset");