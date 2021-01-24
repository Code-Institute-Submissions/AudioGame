const ctx = new AudioContext();
    let audio;

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
   

    
           
         
 function playback() {
     const allNotesArray = [minorSecond, majorSecond, minorThird, majorThird, perfectFourth, tritone, perfectFifth, minorSixth, majorSixth, minorSeventh, majorSeventh, octave]
          const randomNote = allNotesArray[Math.floor(Math.random() * allNotesArray.length)];
       

     
     console.log(randomNote);
     const playSound = ctx.createBufferSource();
        playSound.buffer = randomNote;
        playSound.connect(ctx.destination);
        playSound.start(ctx.currentTime);
    }

    playAgain.addEventListener("mousedown", playback);





 /* Potential randomise options!!!!

Math.floor(Math.random() * 13); 




}*/
   









/*function playback() {
    const playSound = ctx.createBufferSource();
    playSound.buffer = majorSecond;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
}

playAgain.addEventListener("mousedown", playback);*/

