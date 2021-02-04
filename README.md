# Audio Training Game

## Interactive Frontend Project - Code Institute

[The Interval Training Game](shinners888.github.io/audiogame/)


A simple game to test aural skills by guessing the intervals between two notes

Features include:
- randomised sound files of two notes, with the option of hearing them again
- 5 possible points for each interval. 1 point lost for each wrong answer
- Can be played by anyone - developed for people looking to improve or maintain aural skills

## Goals

This is a simple aural testing and training game. Repeated use will build aural skills over time. Constant practise is key to building strong aural skills. A game can build confidence by providing positive feedback on achieving the correct answer. This in turn can encourage people to keep trying and get better.

The target customer is anyone looking to build aural skills. The layout is simple and easy to naviagte regardless of musical knowledge or age.

## UX

The game is aimed at everyone. It helps to be an English speaker as the website and interval options are in English. However, as the layout is intuitive and simple to navigate, it would be easy to figure out, especially for musically trained non-english speakers.

## The Site - Features

The site/game is a single page.
There are:
- a start button
- a repeat button (to hear the last interval again)
- a 'next' button
- a score counter
- 12 buttons representing each interval options

Settings:
- a volume button
- a toggle to choose harmonic or melodic intervals
- a hints sheet for how to play, and how to recognise different intervals

## WIREFRAMES
[Desktop](/workspace/AudioGame/assets/wireframes/md-DesktopWireframe.png)

[Mobile](/workspace/AudioGame/assets/wireframes/mobileWireframe.png)

The final game layout differs slightly from the wireframes. Volume control was not a possibility, and it became imperative during the development of the game that the user pick the interval type before game play. Therefore, there is now a 'Load Game' modal that pops up before the game, where these options can be located.
## Execution

This project was created using:

- HTML
- CSS 
- Javascript 
- Web Sound API 
- JQuery
- Bootstrap 
  - Note: bootstrap classes are formatted with hyphens separating words, whereas my own classes are camelCase
- Font Awesome 
- Logic Pro 
- [Unsplash](https://unsplash.com/)

Resources:

- [HTML and CSS Formatter](https://www.freeformatter.com/)
- [HTML and CSS Validators](https://validator.w3.org/)
- [JavaScript Formatter](https://beautifier.io/)
- [Stack Overflow](https://stackoverflow.com/)
- [Web Audio API Tutorial Videos](https://www.youtube.com/watch?v=3NgVlAscdcA&list=PLMPgoZdlPumc_llMSynz5BqT8dTwr5sZ2)
- [w3schools](https://www.w3schools.com/)
- [AjaxLoad](http://www.ajaxload.info/)
- [dcode](https://www.youtube.com/watch?v=xuA83OYTE7I)

---
## Testing
See [Testing.md](/workspace/AudioGame/testing.md) for development


## Gameplay
1. On game load, choose whether to listen to melodic or harmonic intervals.
2. On start, press play and two notes will sound.
3. Pick from the 12 possible answers below.
4. If incorrect, the button goes red and you lose a point. Try again.
5. If correct, the button goes green and you gain 5 points.
6. The 'next' button will flash green until you have correctly guessed the final interval
7. Score/100 pops up on screen with the prompt to play again.



## Deployment

This project was developed in [Gitpod](https://github.com/), committed to git and pushed to GitHub.

To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

- Go to github and log into your account.

- Select [repository](https://github.com/Shinners888/AudioGame)

- Above green Gitpod button, select settings, and scroll down to github pages section.

- In source: select master branch and root folder.

- Hit save. This may then require patient waiting for the site to be deployed!

- Scroll back down to the GitHub Pages section to retrieve the link to the deployed website. If it is not yet ready, make some tea and wait.

## Cloning the repository

### Cloning in Gitpod

- Log into your Github account
- Go to [repository](https://github.com/Shinners888/AudioGame)
- Click on the green gitpod button (Ensure you have a gitpod account and the gitpod browser extension. Recommended to do this in chrome)
- This will now open a new gitpod workspace using the code in github, for you to work on

### Cloning in other IDEs

- go to this [repository](https://github.com/Shinners888/AudioGame)
- beside the green gitpod button, click the 'code' dropdown
- select the HTTPS option and copy the link to your clipboard
- go to your IDE and open the terminal
- type: 'git clone' followed by pasting the copied link, and press enter
- your clone should be created. for troubleshooting, see: [Github docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)


## Acknowledgements

I would like to thank my Mentor, Nishant Kumar for his invaluable advice, especially regading the simplification of functions. I would also like to thank my game testers, Declan and Eileen, for their feedback and recommendations for the UX.