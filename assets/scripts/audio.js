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

    //get minor second file
    fetchAudioFile("assets/audioclips/minorsecond.wav").then((result) => {
        minorSecond = result
    })

    //get major second file
    fetchAudioFile("assets/audioclips/majorsecond.wav").then((result) => {
        majorSecond = result
    })
    //get minor third file
    fetchAudioFile("assets/audioclips/minorthird.wav").then((result) => {
        minorThird = result
    })

    //get major third file
    fetchAudioFile("assets/audioclips/majorthird.wav").then((result) => {
        majorThird = result
    })

    //get perfect 4th file
    fetchAudioFile("assets/audioclips/perfectfourth.wav").then((result) => {
        perfectFourth = result
    })

    //get tritone file
    fetchAudioFile("assets/audioclips/tritone.wav").then((result) => {
        tritone = result
    })

    //get perfect fifth file
    fetchAudioFile("assets/audioclips/perfectfifth.wav").then((result) => {
        perfectFifth = result
    })

    //get minor sixth file
    fetchAudioFile("assets/audioclips/minorsixth.wav").then((result) => {
        minorSixth = result
    })

    //get major sixth file
    fetchAudioFile("assets/audioclips/majorsixth.wav").then((result) => {
        majorSixth = result
    })

    //get minor seventh file
    fetchAudioFile("assets/audioclips/minorseventh.wav").then((result) => {
        minorSeventh = result
    })

    //get major seventh file
    fetchAudioFile("assets/audioclips/majorseventh.wav").then((result) => {
        majorSeventh = result
    })

    //get octave file
    fetchAudioFile("assets/audioclips/octave.wav").then((result) => {
        majorSecond = result
    })

    function playback() {
        const playSound = ctx.createBufferSource();
        playSound.buffer = majorSecond;
        playSound.connect(ctx.destination);
        playSound.start(ctx.currentTime);
    }

    playAgain.addEventListener("mousedown", playback);







function playback() {
    const playSound = ctx.createBufferSource();
    playSound.buffer = majorSecond;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
}

playAgain.addEventListener("mousedown", playback);

