import * as musicFiles from 'url:./public/music/*.mp3';
import * as thumbnailImages from 'url:./public/music/images/*.jpeg';
console.log(musicFiles);
console.log(thumbnailImages);

//Create objects 

Object.values(thumbnailImages).forEach((thumbnail) => {
    console.log(thumbnail)
  });


//Define constants and variables to start manipulating DOM of music player
const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#playButton");
const prevBtn = document.querySelector("#prevButton");
const nextBtn = document.querySelector("#nextButton");
const musicAudio = document.querySelector("#musicAudio");
const progressContainer = document.querySelector(".musicProgressContainer");
const musicTitle = document.querySelector("#musicTitle");
const musicArt = document.querySelector("#musicArt");

//Store the titles of ths songs in an array that match the audio file names
const musicArray = ['Boom', 'France', 'JackJ', 'Rudie'];

//Index varible to help keep track of songs
let musicIndex = 3;

// Initially load the music info DOM by calling function
loadMusic(musicArray[musicIndex]);

// Function to update the song details of title, audio source and cover art 
function loadMusic(music) {
    musicTitle.innerText = music;

    

    //Using the ${} template placeholder literals, access the audio file and cover art files 
    // Use URL dependencies instead 
    musicAudio.src = 'music/${music}.mp3';
    musicArt.src = 'music/images/${music}.jpeg';

}

//Function to play music
function playMusic() {
    musicContainer.classList.add('play');

}

//Function to pause music
function pauseMusic() {

}

//Bind event listener to play button of music player 
playBtn.addEventListener('click', function(event){

    //Check if music is currently playing 
    const isPlaying = musicContainer.classList.contains('play');

    //If the above condition returns true in variable isPlaying, pause the music 
    // by calling pauseMusic() function  
    if (isPlaying == true) {
        pauseMusic();

    } else {
        playMusic();
    }
});