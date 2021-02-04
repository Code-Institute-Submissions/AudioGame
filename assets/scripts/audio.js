// Declare Variables
var AudioContext =
    window.AudioContext || // Default
    window.webkitAudioContext ||
    false;

if (AudioContext) {
    var ctx = new AudioContext();
} else {
    alert("Browser does not support API");
}

let randomNoteIndex;
let lastRandomNote;
let allNotesArray;
let allNotesArrayHarmonic;
let randomNoteHarmonic;
let correctAnswer;
let currentIntervalID;
let selectedInterval;
var score = 0;
var addScore = 5;

//On Load Page Modal
$(window).on("load", async function() {
    await initialiseSoundFiles(); //Initialise the sound files being fetched in audiofiles.js
    await initialiseHarmonicSoundFiles();
    $("#onPageLoadModal").modal("show"); //Load modal when sound files are initialised

    // Change Harmonic/Melodic function in onPageLoadModal. Melodic is the default, so no change happens here unless they played harmonic in the previous game.

    var intervalTypeSwitch = document.getElementById("intervalTypeSwitch");

    var intervalType = intervalTypeSwitch.getElementsByClassName("intervalType");

    for (var i = 0; i < intervalType.length; i++) {
        intervalType[i].addEventListener("click", function() {
            currentIntervalID = document.getElementsByClassName("active");

            currentIntervalID[0].className = currentIntervalID[0].className.replace(" active", "");

            this.className += " active";
            //Get the ID of the interval the user selected to determine functions in game.
            return (selectedInterval = $("#intervalTypeSwitch .active").attr("id"));
        });
    }
});
//Loading page when game opened. This give the audio files time to initialise.
loadGame.addEventListener("mousedown", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});
// If after 5 seconds the pop up modal hasn't appeared, 
// the user will see this, prompting them to either reload or try a different browser
setTimeout(function() {
    document.querySelector(".loader").innerHTML = "Check your connection or try reloading. <br/>If that doesnt work, your browser might not be a musician<br/>May we suggest trying Chrome or Firefox!";
}, 5000);

// On close start game modal, the selected interval is logged and determines which play and replay variables are triggered by the play buttons.
function onStartGame() {
    score = 0;

    if ($("#melodic").hasClass("active")) {
        startGame.addEventListener("mousedown", playback);
        playAgain.addEventListener("mousedown", replay);
        next.addEventListener("mousedown", playback);
    } else {
        startGame.addEventListener("mousedown", playbackHarmonic);
        playAgain.addEventListener("mousedown", replayHarmonic);
        next.addEventListener("mousedown", playbackHarmonic);
    }
    loadGame.addEventListener("mousedown", console.log(selectedInterval));
}
//Function to fetch audio files - Web Audio API
// Fetching Audio Files from function to send to array in audiofiles.js!
const fetchAudioFile = async (fileName) => {
    if (!fileName) throw new Error("File Name is required");

    return fetch(fileName).then(async (data) => {
        const arrayBuffer = await data.arrayBuffer();
        const decodedAudio = await ctx.decodeAudioData(arrayBuffer);
        return decodedAudio;
    });
};


console.log("initialiseSound");

// Web audio API playback function
// PLAYBACK OF MELODIC FILES - from allNotesArray in audiofiles.js
function playback() {
    let randomNote = allNotesArray[Math.floor(Math.random() * allNotesArray.length)];
    const playSound = ctx.createBufferSource();
    playSound.buffer = randomNote;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
    randomNoteIndex = allNotesArray.indexOf(randomNote);
    console.log(randomNoteIndex);
}
// PLAY LAST MELODIC INTERVAL AGAIN
function replay() {
    lastRandomNote = allNotesArray[randomNoteIndex];

    const playSound = ctx.createBufferSource();
    playSound.buffer = lastRandomNote;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
}
// PLAYBACK OF HARMONIC FILES - from allNotesArrayHarmonic in audiofiles.js
function playbackHarmonic() {
    let randomNoteHarmonic = allNotesArrayHarmonic[Math.floor(Math.random() * allNotesArrayHarmonic.length)];
    const playSound = ctx.createBufferSource();
    playSound.buffer = randomNoteHarmonic;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
    randomNoteIndex = allNotesArrayHarmonic.indexOf(randomNoteHarmonic);
    console.log(randomNoteIndex);
}
// PLAY LAST HARMONIC INTERVAL AGAIN
function replayHarmonic() {
    lastRandomNoteHarmonic = allNotesArrayHarmonic[randomNoteIndex];

    const playSound = ctx.createBufferSource();
    playSound.buffer = lastRandomNoteHarmonic;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
}

// Functions to disable/change style of play buttons at different parts of game
function revertNextCSS() {
    document.getElementById(`next`).style.backgroundColor = "";
}

function changePlayButton() {
    document.getElementById(`startGame`).disabled = true;
    document.getElementById(`startGame`).style.opacity = "1";
    document.getElementById(`startGame`).className += " started";
    document.getElementById(`startGame`).style.backgroundColor = "var(--navy)";
    document.getElementById(`startGame`).innerHTML = `Q:<br/>${20 - count}`; //Log first played file to game progress counter
}

// Event listeners for mouse instructions for play and repeat button styles

startGame.addEventListener("mousedown", changePlayButton);
next.addEventListener("mousedown", revertNextCSS);

// Game Progress counter (x/20). Starts at 1 as the play button is actually the first(0) move.
var button = document.getElementById("next"),
    count = 1;
button.onclick = function() {
    count += 1;
    document.getElementById(`startGame`).innerHTML = `Q:<br/>${20 - count}`; //Logs subsequent played files to game counter.
    if (count === 20) {
        document.getElementById(`next`).style.backgroundColor = "var(--offWhite";
        document.getElementById(`next`).disabled = true;
    }
};

// Function to determine if the answer is right or wrong (note: the button IDs in index.html correspond to the correct audio file position in allNotesArray)
function play(guessIndex) {

    //If incorrect, button goes red for .5s, and player loses a point.
    if (guessIndex !== randomNoteIndex) {
        score--;
        document.getElementById(`button${guessIndex}`).style.backgroundColor = "var(--reddish)";
        setTimeout(function() {
            document.getElementById(`button${guessIndex}`).style.backgroundColor = "";
        }, 500);
    } else {
        // If correct, button goes green for .5s, player gains 5 points, and 'next button is highlighted after .75s
        correctAnswer = true;
        score += addScore;
        document.getElementById(`button${guessIndex}`).style.backgroundColor = "var(--greenish";
        setTimeout(function() {
            document.getElementById(`button${guessIndex}`).style.backgroundColor = "";
        }, 500);
        setTimeout(function() {
            document.getElementById(`next`).style.backgroundColor = "var(--greenish";
        }, 750);
        //End game info. If it's the 20th sound file and the player gueses right, the game is over
        if (correctAnswer === true && count === 20) {
            var endScore = document.getElementById("gameOverScreen");
            if (score >= 75) {
                endScore.innerHTML = `Congratulations Mozart!! <br/>You got ${score}/100`;
                $("#onGameOverModal").modal("show");
            } else if (score >= 50 && score < 75) {
                endScore.innerHTML = `Amazing Work! Keep going :) <br/>You got ${score}/100`;
                $("#onGameOverModal").modal("show");
            } else {
                endScore.innerHTML = `Excellent Effort. Keep Up the Great Work. <br/> Practice Makes Perfect! :) <br/>You got ${score}/100`;
                $("#onGameOverModal").modal("show");
            }
            console.log("game over");
        }
    }
    //Logs player score to inner HTML of score box
    var playerScore = document.getElementById("playerScore");
    playerScore.innerHTML = score;

    //Reset whether melodic or harmonic arrays are being triggered on the play buttons. This is for the next game. 
    //These are initialised below in anotherGame function
    function resetEventListener() {
        if (selectedInterval == "melodic") {
            return playback;
        } else {
            return playbackHarmonic;
        }
    }

    function resetReplayListener() {
        if (selectedInterval == "melodic") {
            return replay;
        } else {
            return replayHarmonic;
        }
    }
    //reset to zero on new game
    var anotherGame = document.getElementById("playAnotherGame");
    anotherGame.onclick = function() {
        score = 0; //reset score
        count = 1; // reset count
        startGame.removeEventListener("mousedown", resetEventListener()); //remove which files will be played 
        next.removeEventListener("mousedown", resetEventListener()); //remove which files will be played 
        playAgain.removeEventListener("mousedown", resetReplayListener()); //remove which files will be played 
        document.getElementById(`next`).disabled = false; // remove disabling of 'next' button
        document.getElementById(`next`).style.backgroundColor = ""; // restore colour of 'next' button
        document.getElementById(`startGame`).disabled = false; // remove disabling of 'play' button
        document.getElementById(`startGame`).className += "btn playAgain"; // remove 'started' class from play button div
        document.getElementById(`startGame`).style.backgroundColor = "var(--greenish)"; // reset bg colour of start button
        document.getElementById(`startGame`).innerHTML = `<i class="fas fa-play"></i>`; // replace game progress counter with play icon
        playerScore.innerHTML = score; //reset screen score
        $("#onPageLoadModal").modal("show"); // reload modal so user can choose interval type.
    };
}