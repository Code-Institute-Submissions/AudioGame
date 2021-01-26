const ctx = new AudioContext();
let audio;
let randomNoteIndex;
let allNotesArray;
const fetchAudioFile = async (fileName) => {
    if (!fileName) throw new Error("File Name is required");

    return fetch(fileName)
        .then(async (data) => {
            const arrayBuffer = await data.arrayBuffer();
            const decodedAudio = await ctx.decodeAudioData(arrayBuffer);
            return decodedAudio;
        })
    }

const initialiseSoundFiles = async function() {
let minorSecondPromise = fetchAudioFile("assets/audioclips/minorsecond.wav");
let majorSecondPromise = fetchAudioFile("assets/audioclips/majorsecond.wav");
let minorThirdPromise = fetchAudioFile("assets/audioclips/minorthird.wav");
let majorThirdPromise = fetchAudioFile("assets/audioclips/majorthird.wav");
let perfectFourthPromise = fetchAudioFile("assets/audioclips/perfectfourth.wav");
let tritonePromise = fetchAudioFile("assets/audioclips/tritone.wav");
let perfectFifthPromise = fetchAudioFile("assets/audioclips/perfectfifth.wav");
let minorSixthPromise = fetchAudioFile("assets/audioclips/minorsixth.wav");
let majorSixthPromise = fetchAudioFile("assets/audioclips/majorsixth.wav");
let minorSeventhPromise = fetchAudioFile("assets/audioclips/minorseventh.wav");
let majorSeventhPromise = fetchAudioFile("assets/audioclips/majorseventh.wav");
let octavePromise = fetchAudioFile("assets/audioclips/octave.wav");

allNotesArray = await Promise.all([minorSecondPromise, majorSecondPromise, minorThirdPromise, 
    majorThirdPromise, perfectFourthPromise, tritonePromise, perfectFifthPromise, minorSixthPromise, 
    majorSixthPromise, minorSeventhPromise, majorSeventhPromise, octavePromise]);

}
initialiseSoundFiles();

function playback() {
    console.log(allNotesArray);
    let randomNote = allNotesArray[Math.floor(Math.random() * allNotesArray.length)];

    const playSound = ctx.createBufferSource();
    playSound.buffer = randomNote;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
    randomNoteIndex = allNotesArray.indexOf(randomNote);
    console.log(randomNoteIndex);
    
}

startGame.addEventListener("mousedown", playback);
playAgain.addEventListener("mousedown", randomNoteIndex);

var score = 0;
var addScore = 10;

function play(guessIndex) {

    if (guessIndex !== randomNoteIndex) {
        addScore--;

        console.log("oh no!")
        console.log(score);
    }
    else {
        console.log("woohoo");
        score += addScore;
        console.log(score);
           
    };
    var playerScore = document.getElementById("playerScore");
            playerScore.innerHTML=score;
};
 


/* volume control script - FIGURE IT OUT!!!

var audio_context = null;
    var gain_node = null;

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    audio_context = new AudioContext();

    gain_node = audio_context.createGain(); // Declare gain node
    gain_node.connect(audio_context.destination); // Connect gain node to speakers




    function render_audio() {

        var request = new XMLHttpRequest();

        var audio_url = "your_music.mp3";

        request.open('GET', audio_url, true); // loading local file for now
        request.responseType = 'arraybuffer';

        // Decode asynchronously
        request.onload = function() {

            audio_context.decodeAudioData(request.response, function(buffer) {

                stored_buffer = buffer; // store buffer for replay later

                var source = audio_context.createBufferSource(); // creates a sound source
                source.buffer = buffer;                    // tell the source which sound to play
                source.connect(gain_node);       // connect source to speakers
                source.start(0);                           // play the source now
            });
        };
        request.send();
    }

    // --- enable volume control for output speakers

    document.getElementById('volume').addEventListener('change', function() {

      var curr_volume = this.value;
      gain_node.gain.value = curr_volume;

      console.log("curr_volume ", curr_volume);
    });*/