## Development and Self Testing

Use of web audio API was initially tested in a different repository to familiarise myself with the syntax.
During the development stage, various objects, functions, booleans, messages and numbers were logged to the console to determine whether functions/variables were working, and to determine in what order various events were happening.

See comments in js files for indications on what each function/variable is doing.


1. Test functionality of loading sound files:
 - testnote.wav loaded into blank HTML page to be triggered on a window-click. Source code came from [Web Audio API Tutorial Videos](https://www.youtube.com/watch?v=3NgVlAscdcA&list=PLMPgoZdlPumc_llMSynz5BqT8dTwr5sZ2)
 
2. Randomise sound files on click.
 - Three separate sound files were loaded using the fetchAudioFile function. Audio files were directed to an array. A separate function randomised the elements in the array Math.floor(Math.random() * array.length) and playback triggered the randomNoteArray.

3. Match array index to answer buttons
 - The arrays are ordered from minor second to octave, as are the buttons. While the randomise array function takes a random element, 
 it also logs the index number of the element in it's original array, to randomNoteIndex. function play(guessIndex), comes from onclick=play(buttonNumber) in the answer buttons.

 - Each answer button triggers a play function with a number matching the corresponding index number from allNotesArray
 This number is also the last character of the button's ID. This allowed me to change the inner css of the clicked button to show if it was correct or incorrect.
- - See Below: Javascript: 1.


4. Have multiple versions of each interval.
 - Arrays of each type of interval were created and randomised. The randomised array of each interval were substituted as elements into allNotesArray. Example:
 - 1. Upload 3 different melodic minor second files.
 - 2. Put all 3 files in melodic minor second array.
 - 3. Let a new variable be a random element of that array.
 - 4. Place that random variable inside allNotes array to be triggered upon click of 'play'/'next' button
 - 5. Repeat for each group of melodic intervals.
 - 6. Do the same for harmonic intervals and put randomised variables in allNotesArrayHarmonic.

 - This was all moved to a new js file called audiofiles.js, just to make audio.js a little cleaner!

5. Create a score counter.
- If the index array of the note, matches the user input 'guessIndex', They get 5 points. 
For everytime they get a guess wrong, 1 point is deducted. The counter was based on [this](https://stackoverflow.com/questions/40993396/add-a-score-counter-to-a-game-using-html-and-javascript/47168970)
question /answer in stackoverflow.
Later, this was added as innerHTML for the user to see their score in real time.

6. Create a function that determines whether 'melodic' or 'harmonic' is selected, and in turn, determines whether the melodic or harmonic playbacks functions are triggered.
 - Getting the selected interval needed to happen before any game play functions could begin. I moved the harmonic/melodic selectors to the onLoadGame modal for the user to choose while the sound files were being initialised.
 There are two ways the active interval type is read throughout the file. For the playback function, a jQuery function, determines whether the element with ID 'melodic' has the active class. If so, teh melodic sound files will be triggered, else, the harmonic.
- - See Below. Javascript: 2.

 - To reset the event listener for the play, replay and next buttons: selectedInterval would return either playback or playbackHarmonic, depending on the active interval type. This could then be used to removeEventListener from the play buttons.
 - - See Below. Javascript: 3.
- Changing the active class on user input was based on the example in - [w3s](https://www.w3schools.com/howto/howto_js_active_element.asp)
 - - See Below. Javascript: 4.
7. Play counter
To have a consistent end game, a play or file counter was added. Each game plays 20 files. The counter is initialised with a value of 1, as the start button has already played one file.

- After the 20th file, with a correct answer, the game ends and the player gets their score. Later, a function was added to disable the 'next' button after 20 files were played, in order to stop the player skipping a turn. If the player skipped, the game could continue indefinitely!



## User Testing and feedback

At several stages of development, the game was sent to two people to try. One had a musical background, one had no musical background.
Feedback and resolutions included:

1.  Highlight correct/incorrect answers with something more obvious than the score change 
 -  This was fixed with the buttons turning green/red for .5s.

2.  Highlight buttons that are to be pressed to continue gameplay
 -  The play button is set to green on loading of the game. The 'next' button turns green upon a correct answer. I set a timeout for 1 second to minimise overlapping of sound files being played. Help from [stackoverflow](https://stackoverflow.com/questions/62441811/how-to-change-innerhtml-every-few-seconds)

3.  "I don't know how intervals should sound to begin with"
 -  This was incorporated as hints into the 'Help' section

4.  Have something to block trying to play the game before the pop-up appears. 
 -  Created loader over screen so the user knows to wait and that the game is working as it should.

 -  Loader is based on this video tutorial from [dcode](https://www.youtube.com/watch?v=xuA83OYTE7I) and disappears on clicking start game function. All sound files should be initialised at this stage and no further loading is required.

5. Remove 'next' button after 20th round. Players who opt to skip at this stage would bypass the end game function and continue in a neverending game!
 -  next button disabled instead of colour change. To be re-enabled on anotherGame function.
 - All resets at the end of the game can be seen below in Javascript: 5

6.  Not working on Safari or IE
 -  IE doesn't support audioContext(). Safari issue still unresolved on developer side.
 
7.  On starting a new game, if I switch melodic/harmonic, now both play simultaneously
 -  A function called resetEventListener (and later, resetReplayListener for the replay button), was created to remove the existing event listener object from the play and next buttons at the end of a game.
 - Javascript: 5

8.  Add Something to indicate how much of the game is left
 -  Added progress counter in place of start button. As start button is now disabled however, opacity had to be assigned to '1'. Buttons inner HTML was repopulated with ${20 - count}

9.  On some large screens, the score area/ play buttons dip below the piano photo
 -  At the time, the photo was set to 33% viewheight. This was changed to 260px to retain as much of the answer block within the screen as possible, and still see the play buttons/score area

10. On new game, the play button does not change back from a game progress counter.
 -  The resets for this button were handled individually in the 'anotherGame' function at the end of audio.js
 -  Javascript: 5

## Bugs and potential future upgrades

1. Web Audio API audioContext() not currently supported in IE and having issues in Safari. Before submission, I sent the game to a few extra people to test. An issue arose with some, but not all Apple devices, even in Chrome or Firefox. The sound files wil not initialise, therefore the game cannot load. The people tried on different devices and were able to play the game. I am working to discover what the common denominator is with these devices.
 - Attempting a patch by user [cwilso](https://github.com/cwilso/AudioContext-MonkeyPatch/) for the browser incompatibility issue with the Web Audio API. This did not change anything ultimately and was removed from the project.

2. More than once, the randomised sound file is the exact same as the previous sound file. 

3. Sound files are larger than synthesized sound. This causes a loading issue. A future version of the game where notes are 
synthesized in the Web Audio API would allow for more variety and should use less space. Alternatively, MP3 files could be used instead of wav files. 
These don't sound as good but use less storage and are easier to load.

4. If the user continues to guess after a correct guess, they lose points. The answer buttons need to be disabled unpon a correct guess until the next sound file is played.

5. A high score could be saved for the user to beat.

6. Add descending melodic filles as a third option.

HTML validation error. h5 heading in end game modal is empty. This is being populated on the end of the game by the js file.

CSS validation: passed.

JavaScript Validation: Shows some errors. Button IDs flagged as undeclared. I tried declaring them but this led to issues with the button names being flagged as undefined in the console.
Included "jshint esversion: 6" and "jshint esversion: 8" to solve the issue of JSHint flagging 'const' and 'let' variables

# Javascript Mentioned Above
## 1.
    
    function play(guessIndex) {
    if (guessIndex !== randomNoteIndex) {
        score--;
    } else {
        correctAnswer = true;
        score += addScore;
    }
    



## 2.
    
    function onStartGame() {

    if ($("#melodic").hasClass("active")) {
        startGame.addEventListener("mousedown", playback);
        playAgain.addEventListener("mousedown", replay);
        next.addEventListener("mousedown", playback);
    } else {
        startGame.addEventListener("mousedown", playbackHarmonic);
        playAgain.addEventListener("mousedown", replayHarmonic);
        next.addEventListener("mousedown", playbackHarmonic);
    }
    }
    

## 3.
    
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
    

## 4.
    
    var intervalTypeSwitch = document.getElementById("intervalTypeSwitch");            // DivID

    var intervalType = intervalTypeSwitch.getElementsByClassName("intervalType");      // DivID > classes

    for (var i = 0; i < intervalType.length; i++) {
        intervalType[i].addEventListener("click", function() {
            currentIntervalID = document.getElementsByClassName("active");

            currentIntervalID[0].className = currentIntervalID[0].className.replace(" active", ""); 

            this.className += " active";                                                // Add active to class of selected interval type
            
            return (selectedInterval = $("#intervalTypeSwitch .active").attr("id"));    // Get the ID of the interval the user selected to determine functions in game.
        });
    }

## 5.

        var anotherGame = document.getElementById("playAnotherGame");
        anotherGame.onclick = function() {
        score = 0;                                                                                  // reset score
        count = 1;                                                                                  // reset count
        startGame.removeEventListener("mousedown", resetEventListener());                           // remove which files will be played 
        next.removeEventListener("mousedown", resetEventListener());                                // remove which files will be played 
        playAgain.removeEventListener("mousedown", resetReplayListener());                          // remove which files will be played 
        document.getElementById(`next`).disabled = false;                                           // remove disabling of 'next' button
        document.getElementById(`next`).style.backgroundColor = "";                                 // restore colour of 'next' button
        document.getElementById(`startGame`).disabled = false;                                      // remove disabling of 'play' button
        document.getElementById(`startGame`).className += "btn playAgain";                          // remove 'started' class from play button div
        document.getElementById(`startGame`).style.backgroundColor = "var(--greenish)";             // reset bg colour of start button
        document.getElementById(`startGame`).innerHTML = `<i class="fas fa-play"></i>`;             // replace game progress counter with play icon
        playerScore.innerHTML = score;                                                              // reset screen score
        $("#onPageLoadModal").modal("show");                                                        // reload modal so user can choose interval type.
    };
}

    