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
let minorSecond;
//get minor second file
fetchAudioFile("assets/audioclips/minorsecond.wav").then((result) => {
    minorSecond = result
})
let majorSecond;
//get major second file
fetchAudioFile("assets/audioclips/majorsecond.wav").then((result) => {
    majorSecond = result
})
let minorThird;
//get minor third file
fetchAudioFile("assets/audioclips/minorthird.wav").then((result) => {
    minorThird = result
})
let majorThird;
//get major third file
fetchAudioFile("assets/audioclips/majorthird.wav").then((result) => {
    majorThird = result
})
let perfectFourth;
//get perfect 4th file
fetchAudioFile("assets/audioclips/perfectfourth.wav").then((result) => {
    perfectFourth = result
})
let tritone;
//get tritone file
fetchAudioFile("assets/audioclips/tritone.wav").then((result) => {
    tritone = result
})
let perfectFifth
//get perfect fifth file
fetchAudioFile("assets/audioclips/perfectfifth.wav").then((result) => {
    perfectFifth = result
})
let minorSixth;
//get minor sixth file
fetchAudioFile("assets/audioclips/minorsixth.wav").then((result) => {
    minorSixth = result
})
let majorSixth;
//get major sixth file
fetchAudioFile("assets/audioclips/majorsixth.wav").then((result) => {
    majorSixth = result
})
let minorSeventh;
//get minor seventh file
fetchAudioFile("assets/audioclips/minorseventh.wav").then((result) => {
    minorSeventh = result
})
let majorSeventh
//get major seventh file
fetchAudioFile("assets/audioclips/majorseventh.wav").then((result) => {
    majorSeventh = result
})
let octave;
//get octave file
fetchAudioFile("assets/audioclips/octave.wav").then((result) => {
    octave = result
})
let majorSeventhPromise = fetchAudioFile("assets/audioclips/majorseventh.wav");
let octavePromise = fetchAudioFile("assets/audioclips/octave.wav");


allNotesArray = await Promise.all([majorSeventhPromise, octavePromise]);


function playback() {
    //const allNotesArray = [minorSecond, majorSecond, minorThird, majorThird, perfectFourth, tritone, perfectFifth, minorSixth, majorSixth, minorSeventh, majorSeventh, octave]

    console.log(allNotesArray);
    let randomNote = allNotesArray[Math.floor(Math.random() * allNotesArray.length)];

    const playSound = ctx.createBufferSource();
    playSound.buffer = randomNote;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
    randomNoteIndex = allNotesArray.indexOf(randomNote);
    console.log(randomNoteIndex);
    
}

playAgain.addEventListener("mousedown", playback);




function play(guessIndex) {
    console.log(guessIndex);

    if (guessIndex === randomNoteIndex) {
        console.log("woohoo")
    } else {
        console.log("oh no!")
    };
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