const ctx = new AudioContext();
let audio;

//get minor second file
fetch("audioclips/minorsecond.wav")
.then(data => data.arrayBuffer())

.then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))

.then(decodedAudio => {
    minorSecond = decodedAudio
})
//get major second file
fetch("audioclips/majorsecond.wav")
.then(data => data.arrayBuffer())

.then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))

.then(decodedAudio => {
    majorSecond = decodedAudio
})







function playback() {
    const playSound = ctx.createBufferSource();
    playSound.buffer = majorSecond;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
}

playAgain.addEventListener("mousedown", playback);

