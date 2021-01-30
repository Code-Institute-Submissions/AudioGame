// Declare Variables
const ctx = new AudioContext();
let audio;
let randomNoteIndex;
let lastRandomNote;
let allNotesArray;

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
// Fetching Audio Files from function to send to array 
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

    let minorSecondPromise2 = fetchAudioFile("assets/audioclips/minorsecond2.wav");
    let majorSecondPromise2 = fetchAudioFile("assets/audioclips/majorsecond2.wav");
    let minorThirdPromise2 = fetchAudioFile("assets/audioclips/minorthird2.wav");
    let majorThirdPromise2 = fetchAudioFile("assets/audioclips/majorthird2.wav");
    let perfectFourthPromise2 = fetchAudioFile("assets/audioclips/perfectfourth2.wav");
    let tritonePromise2 = fetchAudioFile("assets/audioclips/tritone2.wav");
    let perfectFifthPromise2 = fetchAudioFile("assets/audioclips/perfectfifth2.wav");
    let minorSixthPromise2 = fetchAudioFile("assets/audioclips/minorsixth2.wav");
    let majorSixthPromise2 = fetchAudioFile("assets/audioclips/majorsixth2.wav");
    let minorSeventhPromise2 = fetchAudioFile("assets/audioclips/minorseventh2.wav");
    let majorSeventhPromise2 = fetchAudioFile("assets/audioclips/majorseventh2.wav");
    let octavePromise2 = fetchAudioFile("assets/audioclips/octave2.wav");

    let minorSecondPromise3 = fetchAudioFile("assets/audioclips/minorsecond.wav");
    let majorSecondPromise3 = fetchAudioFile("assets/audioclips/majorsecond.wav");
    let minorThirdPromise3 = fetchAudioFile("assets/audioclips/minorthird.wav");
    let majorThirdPromise3 = fetchAudioFile("assets/audioclips/majorthird.wav");
    let perfectFourthPromise3 = fetchAudioFile("assets/audioclips/perfectfourth.wav");
    let tritonePromise3 = fetchAudioFile("assets/audioclips/tritone.wav");
    let perfectFifthPromise3 = fetchAudioFile("assets/audioclips/perfectfifth.wav");
    let minorSixthPromise3 = fetchAudioFile("assets/audioclips/minorsixth.wav");
    let majorSixthPromise3 = fetchAudioFile("assets/audioclips/majorsixth.wav");
    let minorSeventhPromise3 = fetchAudioFile("assets/audioclips/minorseventh.wav");
    let majorSeventhPromise3 = fetchAudioFile("assets/audioclips/majorseventh.wav");
    let octavePromise3 = fetchAudioFile("assets/audioclips/octave.wav");


    // Three random versions of each interval can potentially be sent to the awaiting array below. 

    let melodicMinorSecond = [minorSecondPromise, minorSecondPromise2, minorSecondPromise3]
    let randomMelodicMinorSecond = melodicMinorSecond[Math.floor(Math.random() * 3)];

    let melodicMajorSecond = [majorSecondPromise, majorSecondPromise2, majorSecondPromise3]
    let randomMelodicMajorSecond = melodicMajorSecond[Math.floor(Math.random() * 3)];

    let melodicMinorThird = [minorThirdPromise, minorThirdPromise2, minorThirdPromise3]
    let randomMelodicMinorThird = melodicMinorThird[Math.floor(Math.random() * 3)];

    let melodicMajorThird = [majorThirdPromise, majorThirdPromise2, majorThirdPromise3]
    let randomMelodicMajorThird = melodicMajorThird[Math.floor(Math.random() * 3)];

    let melodicPerfectFourth = [perfectFourthPromise, perfectFourthPromise2, perfectFourthPromise3]
    let randomMelodicPerfectFourth = melodicPerfectFourth[Math.floor(Math.random() * 3)];

    let melodicTritone = [tritonePromise, tritonePromise2, tritonePromise3]
    let randomMelodicTritone = melodicTritone[Math.floor(Math.random() * 3)];

    let melodicPerfectFifth = [perfectFifthPromise, perfectFifthPromise2, perfectFifthPromise3]
    let randomMelodicPerfectFifth = melodicPerfectFifth[Math.floor(Math.random() * 3)];

    let melodicMinorSixth = [minorSixthPromise, minorSixthPromise2, minorSixthPromise3]
    let randomMelodicMinorSixth = melodicMinorSixth[Math.floor(Math.random() * 3)];

    let melodicMajorSixth = [majorSixthPromise, majorSixthPromise2, majorSixthPromise3]
    let randomMelodicMajorSixth = melodicMajorSixth[Math.floor(Math.random() * 3)];

    let melodicMinorSeventh = [minorSeventhPromise, minorSeventhPromise2, minorSeventhPromise3]
    let randomMelodicMinorSeventh = melodicMinorSeventh[Math.floor(Math.random() * 3)];

    let melodicMajorSeventh = [majorSeventhPromise, majorSeventhPromise2, majorSeventhPromise3]
    let randomMelodicMajorSeventh = melodicMajorSeventh[Math.floor(Math.random() * 3)];

    let melodicOctave = [octavePromise, octavePromise2, octavePromise3]
    let randomMelodicOctave = melodicOctave[Math.floor(Math.random() * 3)];

    /* Any melodic interval file can be randomly accessed from this array. 
       All files of the same interval now share an index number in this array to determine 
       if it matches the ID of the guess interval buttons from the player. */
    allNotesArray = await Promise.all([randomMelodicMinorSecond, randomMelodicMajorSecond, randomMelodicMinorThird,
        randomMelodicMajorThird, randomMelodicPerfectFourth, randomMelodicTritone, randomMelodicPerfectFifth, randomMelodicMinorSixth,
        randomMelodicMajorSixth, randomMelodicMinorSeventh, randomMelodicMajorSeventh, randomMelodicOctave
    ]);

}
initialiseSoundFiles();

// Web audio API playback function with randomised version of allNotesArray
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
// Play last interval again
function replay() {

    lastRandomNote = allNotesArray[randomNoteIndex];

    const playSound = ctx.createBufferSource();
    playSound.buffer = lastRandomNote;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);


}
// Event listeners for mouse instructions for play and repeat
startGame.addEventListener("mousedown", playback);
playAgain.addEventListener("mousedown", replay);

// Initialise scores
var score = 0;
var addScore = 5;

// Function to determine if the answer is right or wrong (note: the button IDs in index.html correspond to the correct audio file position in allNotesArray)
function play(guessIndex) {

    if (guessIndex !== randomNoteIndex) {
        score--;
        document.getElementById(`button${guessIndex}`).style.backgroundColor = "red";
    } else {
        score += addScore;
        document.getElementById(`button${guessIndex}`).style.backgroundColor = "green";
    };
    var playerScore = document.getElementById("playerScore");
    playerScore.innerHTML = score;

};

//format start button, replay button, skip button and create 'next' option




       