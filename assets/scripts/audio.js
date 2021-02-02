// Declare Variables
const ctx = new AudioContext();
let audio;
let randomNoteIndex;
let lastRandomNote;
let allNotesArray;
let allNotesArrayHarmonic;
let randomNoteHarmonic;

//On Load Page Modal
$(window).on('load', function() {
        $('#onPageLoadModal').modal('show');
    });

// On close start game modal
function onStartGame() {
      
}

// Change Harmonic/Melodic function
var currentIntervalID;
var intervalTypeSwitch = document.getElementById("intervalTypeSwitch");

var intervalType = intervalTypeSwitch.getElementsByClassName("intervalType");

for (var i = 0; i < intervalType.length; i++) {
  intervalType[i].addEventListener("click", function() {
    var currentIntervalID = document.getElementsByClassName("active");

    currentIntervalID[0].className = currentIntervalID[0].className.replace(" active", "");
 
    this.className += " active";
    
  });
  
}
var selectedInterval = $("#intervalTypeSwitch .active").attr('id');
loadGame.addEventListener("mousedown", console.log(selectedInterval));
;

//Function to fetch audio files - Web Audio API
const fetchAudioFile = async (fileName) => {
    if (!fileName) throw new Error("File Name is required");

    return fetch(fileName)
        .then(async (data) => {
            const arrayBuffer = await data.arrayBuffer();
            const decodedAudio = await ctx.decodeAudioData(arrayBuffer);
            return decodedAudio;
        })
}
// Fetching Audio Files from function to send to array in audiofiles.js!

   
initialiseSoundFiles();
initialiseHarmonicSoundFiles();

            // Web audio API playback function with randomised version of allNotesArray
function playback() {
            // let randomNote = allNotesArray[Math.floor(Math.random() * allNotesArray.length)];
    let randomNote = allNotesArray[Math.floor(Math.random() * allNotesArray.length)];  
    const playSound = ctx.createBufferSource();
    playSound.buffer = randomNote;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
    randomNoteIndex = allNotesArray.indexOf(randomNote);
    console.log(randomNoteIndex);
}
            // Play last interval again
function replay() {

    lastRandomNote = allNotesArray[randomNoteIndex];

    const playSound = ctx.createBufferSource();
    playSound.buffer = lastRandomNote;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
}
            // PLAYBACK OF HARMONIC FILES
function playbackHarmonic() {
    let randomNoteHarmonic = allNotesArrayHarmonic[Math.floor(Math.random() * allNotesArrayHarmonic.length)];  
    const playSound = ctx.createBufferSource();
    playSound.buffer = randomNoteHarmonic;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
    randomNoteIndex = allNotesArrayHarmonic.indexOf(randomNoteHarmonic);
    console.log(randomNoteIndex);
}
            // Play last interval again
function replayHarmonic() {

    lastRandomNoteHarmonic = allNotesArrayHarmonic[randomNoteIndex];

    const playSound = ctx.createBufferSource();
    playSound.buffer = lastRandomNoteHarmonic;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
}
function revertNextCSS() {
    document.getElementById(`next`).style.backgroundColor = ""
}

            // Event listeners for mouse instructions for play and repeat
          
startGame.addEventListener("mousedown", playback);
playAgain.addEventListener("mousedown", replay);
next.addEventListener('mousedown', playback)
next.addEventListener('mousedown', revertNextCSS)
            // Initialise scores
var score = 0;
var addScore = 5;

            // Function to determine if the answer is right or wrong (note: the button IDs in index.html correspond to the correct audio file position in allNotesArray)
function play(guessIndex) {

    if (guessIndex !== randomNoteIndex) {
        score--;
        document.getElementById(`button${guessIndex}`).style.backgroundColor = "red";
        setTimeout(function(){ document.getElementById(`button${guessIndex}`).style.backgroundColor ="" }, 500);
    } else {
        score += addScore;
        document.getElementById(`button${guessIndex}`).style.backgroundColor = "green";
        setTimeout(function(){ document.getElementById(`button${guessIndex}`).style.backgroundColor ="" }, 500);
        setTimeout(function(){ document.getElementById(`next`).style.backgroundColor = "green"}, 500);
    };
    var playerScore = document.getElementById("playerScore");
    playerScore.innerHTML = score;

};


            //format start button, replay button, skip button and create 'next' option




       