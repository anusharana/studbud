// Create variables for the nav buttons 
var homePageNavBtn = document.getElementById("homeNavBtn");
var appsPageNavBtn = document.getElementById("appsNavBtn");

//Create variables for the home and apps page contents 
var homePage = document.querySelector(".row-home");
var appsPage = document.querySelector(".row-apps");

//When user clicks home nav button, display only .row-home
homePageNavBtn.addEventListener("click",function(event){
    // appsPage.style.display = "none";


    appsPage.style.visibility = "hidden";
    homePage.style.visibility = "visible";

    // appsPage.classList.toggle('row-home');

});

//When user clicks apps nav button, display only .row-apps
appsPageNavBtn.addEventListener("click",function(event){
    // homePage.style.display = "none";
    appsPage.style.visibility = "visible";
    homePage.style.visibility = "hidden";

    // homePage.classList.toggle('row-apps');

});