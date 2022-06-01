//If timer is active link the wellness bar to give prompts at end of session 

// As eachtask is completed, progress bar shall increase 
// quantifiable value => each element should take a fraction of the bar 
// logic in css? 

// TIMER 
// how to code for different states
// how to set different time incremements 

var homePage = document.querySelector("#home");
var appsPage = document.querySelector("#apps");


homePage.addEventListener("click",function(event){
    appsPage.style.display = "none";

});

appsPage.addEventListener("click",function(event){
    homePage.style.display = "none";

});