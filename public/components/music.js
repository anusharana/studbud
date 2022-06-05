//Using the glob resolver to import multiple files at a time, rather than 
// import each individual mp3 and jpeg file. 
// SRC: https://parceljs.org/blog/rc0/#glob-resolver-plugin
import musicFiles from 'url:../music/*.mp3';
import thumbnailImages from 'url:../music/images/*.jpeg';

// For debugging purposes
// console.log(musicFiles);
// console.log(thumbnailImages);


//Define constants and variables to start manipulating DOM of music player
const musicContainer = document.querySelector(".music-container");
var playBtn = document.querySelector("#playButton");
const prevBtn = document.querySelector("#prevButton");
const nextBtn = document.querySelector("#nextButton");
const musicAudio = document.querySelector("#musicAudio");
const progressContainer = document.querySelector(".musicProgressContainer");
const musicTitle = document.querySelector("#musicTitle");
const musicArt = document.querySelector("#musicArt");

//Store the titles of ths songs in an array that match the audio file names
const musicArray = ['Boom', 'France', 'JackJ', 'Rudie'];

//Index varible to help keep track of songs
let musicIndex = 2;

// Initially load the music info DOM by calling function
loadMusic(musicArray[musicIndex]);

// FUNCTIONS
// Function to update the song details of title, audio source and cover art 
function loadMusic(music) {
    musicTitle.innerText = music;

    

    //Access the music and image files from the object returned by the glob resolver plugin
    musicAudio.src = musicFiles[music];
    musicArt.src = thumbnailImages[music];

}

//Function to play music
function playMusic() {
    //Add the class of .play to .musicContainer
    musicContainer.classList.add('play');
    //Once the play button is selected, switch it to a play button 
    playBtn.querySelector('span.material-symbols-outlined').classList.remove('play_arrow');
    playBtn.querySelector('span.material-symbols-outlined').classList.add('pause');
    playBtn.querySelector('span.material-symbols-outlined').innerHTML = 'pause'

    //To play song, take the audio tag and select play 
    musicAudio.play();

}

//Function to pause music
function pauseMusic() {

    //Add the class of .play to .musicContainer
    musicContainer.classList.remove('play');
    //Once the play button is selected, switch it to a play button 
    playBtn.querySelector('span.material-symbols-outlined').classList.add('play_arrow');
    playBtn.querySelector('span.material-symbols-outlined').classList.remove('pause');
    playBtn.querySelector('span.material-symbols-outlined').innerHTML = 'play_arrow';

    //To pause song, take the audio tag and select pause
    musicAudio.pause();
}

function prevMusic() {
    //Negate musicIndex by 1 to retrieve previous song 
    musicIndex = musicIndex - 1;

    //Set up condition to make sure musicIndex doenst go lower than 0 
    if (musicIndex < 0) {
        //Shift index to the last song 
        musicIndex = musicArray.length - 1;

    }

    //Call the funciton to load music with updated Index and play music 
    loadMusic(musicArray[musicIndex]);
    playMusic();
}

function nextMusic() {
        //Incremement musicIndex by 1 to retrieve previous song 
        musicIndex = musicIndex + 1;

        //Set up condition to make sure musicIndex doenst go larger than the number of songs in array  
        if (musicIndex > musicArray.length - 1) {
            //Shift index to the first song 
            musicIndex = 0;
    
        }
    
        //Call the funciton to load music with updated Index and play music 
        loadMusic(musicArray[musicIndex]);
        playMusic();
}

//Progress bar functionality 
// updateProgress will Take in an event object called timeStamp
// SRC: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event
function updateProgress(timeStamp) {

    //Collect attributes of duration of song and current time of song playing into timeStamp object 
    const {duration, currentTime} = timeStamp.srcElement;
    //Calculate the proportion of the song played at each moment 
    const progressPercent = (currentTime / duration)*100;

    // Alter the styles of the width of progress bar 
    progressContainer.style.width = 'progressPercent';

    ///////////////////////////////////////////////////////////////////////////////////
    // Doesn't work, unsure how to convert the data type of progressPercent to match element width
}

//EVENT LISTENERS
//Bind event listener to play button of music player 
playBtn.addEventListener('click', function(event){

    //Check if music is currently playing 
    const isPlaying = musicContainer.classList.contains('play');

    //If the above condition returns true in variable isPlaying, pause the music 
    // by calling pauseMusic() function  
    if (isPlaying == true) {
        //CHECK IF THEY ARE SWAPPED 
        pauseMusic();
    } else {
        playMusic();
        
    }
});

//Change song through music navigation buttons 
prevBtn.addEventListener('click', prevMusic);
nextBtn.addEventListener('click', nextMusic);


// Use the 'timeupdate' event with the addEventListener API for progress bar functionality 
// SRC: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event
musicAudio.addEventListener('timeupdate', updateProgress)