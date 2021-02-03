// Declare Variables
const ctx = new AudioContext();
let audio;
let randomNoteIndex;
let lastRandomNote;
let allNotesArray;
let allNotesArrayHarmonic;
let randomNoteHarmonic;
let correctAnswer;
let currentIntervalID;
let isMelodic;
let selectedInterval;
var score = 0;
var addScore = 5;



//On Load Page Modal
$(window).on('load', async function() {
    await initialiseSoundFiles();
    await initialiseHarmonicSoundFiles();
    $('#onPageLoadModal').modal('show');



    // Change Harmonic/Melodic function

    var intervalTypeSwitch = document.getElementById("intervalTypeSwitch");

    var intervalType = intervalTypeSwitch.getElementsByClassName("intervalType");

    for (var i = 0; i < intervalType.length; i++) {
        intervalType[i].addEventListener("click", function() {
            currentIntervalID = document.getElementsByClassName("active");

            currentIntervalID[0].className = currentIntervalID[0].className.replace(" active", "");

            this.className += " active";

            return selectedInterval = $("#intervalTypeSwitch .active").attr('id');
        });
        
    }
    
});
function IsMelodic() {
    return selectedInterval == 'melodic';
}
loadGame.addEventListener("mousedown", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
}) 

// On close start game modal
function onStartGame() {
    score = 0;
    console.log(selectedInterval);
if (IsMelodic() == true) {
    startGame.addEventListener("mousedown", playback);
    playAgain.addEventListener("mousedown", replay);
    next.addEventListener('mousedown', playback)
} else {
    startGame.addEventListener("mousedown", playbackHarmonic);
    playAgain.addEventListener("mousedown", replayHarmonic);
    next.addEventListener('mousedown', playbackHarmonic)
}
    loadGame.addEventListener("mousedown", console.log(selectedInterval));
}
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

console.log("initialiseSound");


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




startGame.addEventListener("mousedown", changePlayButton);
next.addEventListener('mousedown', revertNextCSS)




var button = document.getElementById("next"),
    count = 1;
button.onclick = function() {
    count += 1;
    if (count === 20) {
        document.getElementById(`next`).style.backgroundColor = "#e8e8e8";
    }

};



// Function to determine if the answer is right or wrong (note: the button IDs in index.html correspond to the correct audio file position in allNotesArray)
function play(guessIndex) {

    if (guessIndex !== randomNoteIndex) {
        score--;
        document.getElementById(`button${guessIndex}`).style.backgroundColor = "var(--reddish)";
        setTimeout(function() {
            document.getElementById(`button${guessIndex}`).style.backgroundColor = ""
        }, 500);
    } else {
        correctAnswer = true;
        score += addScore;
        document.getElementById(`button${guessIndex}`).style.backgroundColor = "#22B114";
        setTimeout(function() {
            document.getElementById(`button${guessIndex}`).style.backgroundColor = ""
        }, 500);
        setTimeout(function() {
            document.getElementById(`next`).style.backgroundColor = "#22B114"
        }, 750);


        if (correctAnswer === true && count === 20) {
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
        count = 1;
        isMelodic = undefined;
        playerScore.innerHTML = score;
        document.getElementById(`startGame`).style.opacity = "1";
        $('#onPageLoadModal').modal('show');
    }
};