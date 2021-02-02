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

    let minorSecondPromise3 = fetchAudioFile("assets/audioclips/minorsecond3.wav");
    let majorSecondPromise3 = fetchAudioFile("assets/audioclips/majorsecond3.wav");
    let minorThirdPromise3 = fetchAudioFile("assets/audioclips/minorthird3.wav");
    let majorThirdPromise3 = fetchAudioFile("assets/audioclips/majorthird3.wav");
    let perfectFourthPromise3 = fetchAudioFile("assets/audioclips/perfectfourth3.wav");
    let tritonePromise3 = fetchAudioFile("assets/audioclips/tritone3.wav");
    let perfectFifthPromise3 = fetchAudioFile("assets/audioclips/perfectfifth3.wav");
    let minorSixthPromise3 = fetchAudioFile("assets/audioclips/minorsixth3.wav");
    let majorSixthPromise3 = fetchAudioFile("assets/audioclips/majorsixth3.wav");
    let minorSeventhPromise3 = fetchAudioFile("assets/audioclips/minorseventh3.wav");
    let majorSeventhPromise3 = fetchAudioFile("assets/audioclips/majorseventh3.wav");
    let octavePromise3 = fetchAudioFile("assets/audioclips/octave3.wav");


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
const initialiseHarmonicSoundFiles = async function() {
 let minorSecondHarPromise = fetchAudioFile("assets/audioclipsHarmonic/minorsecondharmonic.wav");
    let majorSecondHarPromise = fetchAudioFile("assets/audioclipsHarmonic/majorsecondharmonic.wav");
    let minorThirdHarPromise = fetchAudioFile("assets/audioclipsHarmonic/minorthirdharmonic.wav");
    let majorThirdHarPromise = fetchAudioFile("assets/audioclipsHarmonic/majorthirdharmonic.wav");
    let perfectFourthHarPromise = fetchAudioFile("assets/audioclipsHarmonic/perfectfourthharmonic.wav");
    let tritoneHarPromise = fetchAudioFile("assets/audioclipsHarmonic/tritoneharmonic.wav");
    let perfectFifthHarPromise = fetchAudioFile("assets/audioclipsHarmonic/perfectfifthharmonic.wav");
    let minorSixthHarPromise = fetchAudioFile("assets/audioclipsHarmonic/minorsixthharmonic.wav");
    let majorSixthHarPromise = fetchAudioFile("assets/audioclipsHarmonic/majorsixthharmonic.wav");
    let minorSeventhHarPromise = fetchAudioFile("assets/audioclipsHarmonic/minorseventhharmonic.wav");
    let majorSeventhHarPromise = fetchAudioFile("assets/audioclipsHarmonic/majorseventhharmonic.wav");
    let octaveHarPromise = fetchAudioFile("assets/audioclipsHarmonic/octaveharmonic.wav");

    let minorSecondHarPromise2 = fetchAudioFile("assets/audioclipsHarmonic/minorsecondharmonic2.wav");
    let majorSecondHarPromise2 = fetchAudioFile("assets/audioclipsHarmonic/majorsecondharmonic2.wav");
    let minorThirdHarPromise2 = fetchAudioFile("assets/audioclipsHarmonic/minorthirdharmonic2.wav");
    let majorThirdHarPromise2 = fetchAudioFile("assets/audioclipsHarmonic/majorthirdharmonic2.wav");
    let perfectFourthHarPromise2 = fetchAudioFile("assets/audioclipsHarmonic/perfectfourthharmonic2.wav");
    let tritoneHarPromise2 = fetchAudioFile("assets/audioclipsHarmonic/tritoneharmonic2.wav");
    let perfectFifthHarPromise2 = fetchAudioFile("assets/audioclipsHarmonic/perfectfifthharmonic2.wav");
    let minorSixthHarPromise2 = fetchAudioFile("assets/audioclipsHarmonic/minorsixthharmonic2.wav");
    let majorSixthHarPromise2 = fetchAudioFile("assets/audioclipsHarmonic/majorsixthharmonic2.wav");
    let minorSeventhHarPromise2 = fetchAudioFile("assets/audioclipsHarmonic/minorseventhharmonic2.wav");
    let majorSeventhHarPromise2 = fetchAudioFile("assets/audioclipsHarmonic/majorseventhharmonic2.wav");
    let octaveHarPromise2 = fetchAudioFile("assets/audioclipsHarmonic/octaveharmonic2.wav");

    let minorSecondHarPromise3 = fetchAudioFile("assets/audioclipsHarmonic/minorsecondharmonic3.wav");
    let majorSecondHarPromise3 = fetchAudioFile("assets/audioclipsHarmonic/majorsecondharmonic3.wav");
    let minorThirdHarPromise3 = fetchAudioFile("assets/audioclipsHarmonic/minorthirdharmonic3.wav");
    let majorThirdHarPromise3 = fetchAudioFile("assets/audioclipsHarmonic/majorthirdharmonic3.wav");
    let perfectFourthHarPromise3 = fetchAudioFile("assets/audioclipsHarmonic/perfectfourthharmonic3.wav");
    let tritoneHarPromise3 = fetchAudioFile("assets/audioclipsHarmonic/tritoneharmonic3.wav");
    let perfectFifthHarPromise3 = fetchAudioFile("assets/audioclipsHarmonic/perfectfifthharmonic3.wav");
    let minorSixthHarPromise3 = fetchAudioFile("assets/audioclipsHarmonic/minorsixthharmonic3.wav");
    let majorSixthHarPromise3 = fetchAudioFile("assets/audioclipsHarmonic/majorsixthharmonic3.wav");
    let minorSeventhHarPromise3 = fetchAudioFile("assets/audioclipsHarmonic/minorseventhharmonic3.wav");
    let majorSeventhHarPromise3 = fetchAudioFile("assets/audioclipsHarmonic/majorseventhharmonic3.wav");
    let octaveHarPromise3 = fetchAudioFile("assets/audioclipsHarmonic/octaveharmonic3.wav");


    // Three random versions of each interval can potentially be sent to the awaiting array below. 

    let harmonicMinorSecond = [minorSecondHarPromise, minorSecondHarPromise2, minorSecondHarPromise3]
    let randomHarmonicMinorSecond = harmonicMinorSecond[Math.floor(Math.random() * 3)];

    let harmonicMajorSecond = [majorSecondHarPromise, majorSecondHarPromise2, majorSecondHarPromise3]
    let randomHarmonicMajorSecond = harmonicMajorSecond[Math.floor(Math.random() * 3)];

    let harmonicMinorThird = [minorThirdHarPromise, minorThirdHarPromise2, minorThirdHarPromise3]
    let randomHarmonicMinorThird = harmonicMinorThird[Math.floor(Math.random() * 3)];

    let harmonicMajorThird = [majorThirdHarPromise, majorThirdHarPromise2, majorThirdHarPromise3]
    let randomHarmonicMajorThird = harmonicMajorThird[Math.floor(Math.random() * 3)];

    let harmonicPerfectFourth = [perfectFourthHarPromise, perfectFourthHarPromise2, perfectFourthHarPromise3]
    let randomHarmonicPerfectFourth = harmonicPerfectFourth[Math.floor(Math.random() * 3)];

    let harmonicTritone = [tritoneHarPromise, tritoneHarPromise2, tritoneHarPromise3]
    let randomHarmonicTritone = harmonicTritone[Math.floor(Math.random() * 3)];

    let harmonicPerfectFifth = [perfectFifthHarPromise, perfectFifthHarPromise2, perfectFifthHarPromise3]
    let randomHarmonicPerfectFifth = harmonicPerfectFifth[Math.floor(Math.random() * 3)];

    let harmonicMinorSixth = [minorSixthHarPromise, minorSixthHarPromise2, minorSixthHarPromise3]
    let randomHarmonicMinorSixth = harmonicMinorSixth[Math.floor(Math.random() * 3)];

    let harmonicMajorSixth = [majorSixthHarPromise, majorSixthHarPromise2, majorSixthHarPromise3]
    let randomHarmonicMajorSixth = harmonicMajorSixth[Math.floor(Math.random() * 3)];

    let harmonicMinorSeventh = [minorSeventhHarPromise, minorSeventhHarPromise2, minorSeventhHarPromise3]
    let randomHarmonicMinorSeventh = harmonicMinorSeventh[Math.floor(Math.random() * 3)];

    let harmonicMajorSeventh = [majorSeventhHarPromise, majorSeventhHarPromise2, majorSeventhHarPromise3]
    let randomHarmonicMajorSeventh = harmonicMajorSeventh[Math.floor(Math.random() * 3)];

    let harmonicOctave = [octaveHarPromise, octaveHarPromise2, octaveHarPromise3]
    let randomHarmonicOctave = harmonicOctave[Math.floor(Math.random() * 3)];

allNotesArrayHarmonic = await Promise.all([randomHarmonicMinorSecond, randomHarmonicMajorSecond, randomHarmonicMinorThird,
        randomHarmonicMajorThird, randomHarmonicPerfectFourth, randomHarmonicTritone, randomHarmonicPerfectFifth, randomHarmonicMinorSixth,
        randomHarmonicMajorSixth, randomHarmonicMinorSeventh, randomHarmonicMajorSeventh, randomHarmonicOctave
    ]);
}