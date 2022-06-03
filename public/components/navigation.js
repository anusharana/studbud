// Create variables for the nav buttons 
var homePageNavBtn = document.getElementById("homeNavBtn");
var appsPageNavBtn = document.getElementById("appsNavBtn");

//Create variables for the home and apps page contents 
var appsPage = document.querySelector(".row-home");
var appsPage = document.querySelector(".row-apps");

//When user clicks home nav button, display only .row-home
homePageNavBtn.addEventListener("click",function(event){
    appsPage.style.display = "none";

});

//When user clicks apps nav button, display only .row-apps
appsPageNavBtn.addEventListener("click",function(event){
    homePage.style.display = "none";

});