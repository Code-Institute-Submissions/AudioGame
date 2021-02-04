## Self Testing
Use of web audio API was initially tested in a different repository to familiarise myself with the syntax.


1. Test functionality of loading sound files:
 - testnote.wav loaded into blank HTML page to be triggered on a window-click. Source code came from [Web Audio API Tutorial Videos](https://www.youtube.com/watch?v=3NgVlAscdcA&list=PLMPgoZdlPumc_llMSynz5BqT8dTwr5sZ2)

2. Randomise sound files on click.
 - Three separate sound files loaded using the fetchAudioFile function. Audio files were directed to an array. A separate function randomised the elements in the array (using math.random * array.length) and playback triggered the randomNoteArray.

3. Match array index to answer buttons
 - The arrays are ordered from minor second to octave, as are the buttons. While the randomise array function takes a random element, it also logs the index number of the element in it's original array.
 
 Each answer button triggers a play function with a number matching the corresponding index number from allNotesArray
 This number is also the last character of the button's ID. This allowed me to change the inner css of the clicked button to show if it was correct or incorrect.

4. Have multiple versions of each interval.
 - Arrays of each type of interval were created and randomised. The randomised array of each interval were substituted as elements into allNotesArray.

5. R






## User Testing and feedback

The game at several stages of development was sent to two people to try. One had a musical background, one had no musical background.

0. Feedback
- Resolution
1. Highlight correct/incorrect answers with something more obvious than the score change 
- This was fixed with the buttons turning green/red for .5s.
2. Highlight buttons that are to be pressed to continue gameplay
- This was fixed with the 'next' turning green upon a correct answer
3. Examples to help understand how the intervals should sound
- This was incorporated as hints into the 'Help' section
4. Have something to block trying to play the game before the pop-up appears. 
- Created loader over screen so the user knows to wait and that the game is working as it should.

Loader is based on this video tutorial from [dcode](https://www.youtube.com/watch?v=xuA83OYTE7I) and disappears on clicking start game function. All sound files should be initialised at this stage and no further loading is required.

5. Remove 'next' button after 20th round. Players who opt to skip at this stage would bypass the end game function and continue in a neverending game!
- next button disabled instead of colour change. To be re-enabled on playAnotherGame() function.



## Bugs and potential future fixes/upgrades

1. More than once, the randomised sound file is the exact same as the previous sound file. 
- Unresolved

2. Sound files are larger than synthesized sound. This causes a loading issue. A future version of the game where notes are 
synthesized in the Web Audio API would allow for more variety and should use less space. Alternatively, MP3 files could be used instead of wav files. 
These don't sound as good but use less storage and are easier to load.




# Current Bugs

Safari/IE 

