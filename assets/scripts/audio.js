// Declare Variables
const ctx = new AudioContext();
let audio;
let randomNoteIndex;
let lastRandomNote;
let allNotesArray;
let allNotesArrayHarmonic;
let randomNoteHarmonic;
let correctAnswer;
let isMelodic;
var score = 0;
var addScore = 5;

//On Load Page Modal
$(window).on('load', function() {
    $('#onPageLoadModal').modal('show');
});

// On close start game modal
function onStartGame() {
    score = 0;
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
loadGame.addEventListener("mousedown", console.log(selectedInterval));;

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

function changePlayButton() {
    document.getElementById(`startGame`).style.opacity = "0";
}
// Event listeners for mouse instructions for play and repeat

startGame.addEventListener("mousedown", playback);
startGame.addEventListener("mousedown", changePlayButton);
playAgain.addEventListener("mousedown", replay);
next.addEventListener('mousedown', playback)
next.addEventListener('mousedown', revertNextCSS)




var button = document.getElementById("next"),
    count = 1;
button.onclick = function() {
    count += 1;
    if (count === 3) {
        document.getElementById(`next`).style.backgroundColor = "#e8e8e8";
    }

};
// Initialise scores


// Function to determine if the answer is right or wrong (note: the button IDs in index.html correspond to the correct audio file position in allNotesArray)
function play(guessIndex) {

    if (guessIndex !== randomNoteIndex) {
        score--;
        document.getElementById(`button${guessIndex}`).style.backgroundColor = "#F7977A";
        setTimeout(function() {
            document.getElementById(`button${guessIndex}`).style.backgroundColor = ""
        }, 500);
    } else {
        correctAnswer = true;
        score += addScore;
        document.getElementById(`button${guessIndex}`).style.backgroundColor = "#82CA9D";
        setTimeout(function() {
            document.getElementById(`button${guessIndex}`).style.backgroundColor = ""
        }, 500);
        setTimeout(function() {
            document.getElementById(`next`).style.backgroundColor = "#82CA9D"
        }, 500);


        if (correctAnswer === true && count === 3) {
            var endScore = document.getElementById("gameOverScreen");
            if (score >= 75) {
                endScore.innerHTML = (`Congratulations Mozart!! <br/>You got ${score}/100`)
                $('#onGameOverModal').modal('show');
            } else if (score >= 50 && score < 75) {
                endScore.innerHTML = (`Amazing Work! Keep going :) <br/>You got ${score}/100`)
                $('#onGameOverModal').modal('show');
            } else {
                endScore.innerHTML = (`Excellent Effort. Keep Up the Great Work. <br/> Practice Makes Perfect! :) <br/>You got ${score}/100`)
                $('#onGameOverModal').modal('show');
            }
        }
        
    };
    var playerScore = document.getElementById("playerScore");
    playerScore.innerHTML = score;
    
    
    //reset to zero on new game

    var anotherGame = document.getElementById("playAnotherGame");
        anotherGame.onclick = function() {
        score = 0;
        playerScore.innerHTML = score;
        document.getElementById(`startGame`).style.opacity = "1";
            $('#onPageLoadModal').modal('show');
        }
};


//format start button, replay button, skip button and create 'next' option