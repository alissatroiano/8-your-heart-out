# Smitten

Smitten is an online game for Valentine's Day inspired by the famous "Wordle Game". The game is built for anyone who likes word games, and want to test their knowledge in love.

The rules are simple: The player must guess the hidden word of 5 characters in 6 tries. First of all, type any love word on the first line and see if there's a match. You will get a match and the tile will turn red if the letter is guessed correctly and is in the right spot. If the letter is in the word, but in the wrong position, will become pink.  And the tile will become silver if the letter doesn't match the place and isn't in the word.

![Screenshot 2022-02-27 153350](https://user-images.githubusercontent.com/95313496/155888973-51f761de-c3d8-45b2-90ad-8be4d5be0ee8.jpg)


## Table of Contents

- [Smitten](#smitten)
  - [Table of Contents](#table-of-contents)
  - [UX](#ux)
    - [Features](#features)
    - [User Stories](#user-stories)
    - [Wireframes](#wireframes)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Libraries and Programs Used](#libraries-and-programs-used)
  - [CREDITS](#credits)
  - [ACKNOWLEDGEMENTS](#acknowledgements)
  - [Deployment](#deployment)

## UX

### Features

Navigation bar
- The navigation bar is present on all three pages to maintain uniformity.
- The navigation bar is fully responsive. 
- It includes the logo, the love calculater page, the game page and the developer page. 
- Directions: A Bootstrap modal with text content about how to play, so users understand how to play the game.
  This is only present on the game page.
- It's easy to navigate on every page, there is no need to use the 'back' button. 

Home: The home page of the game. [Home](https://alissatroiano.github.io/8-your-heart-out/)
- The landing page has a big welcome message that directly draws attention. 
- Right underneath is the love calculator visible. 
- It has two containers where the names of two people are entered. And a submit button. 
- After Solving the word puzzle it reveals how romantically compatible they are using the Love Calculator API! 

Footer
- The footer section includes an all rights reserved and the name of the developers group, 8-your-heart-out. 
- The footer will be shown throughout all pages to maintain uniformity. 

Smitten: The game itself. [Game](https://alissatroiano.github.io/8-your-heart-out/)
- The game page contains the actual game. 
- It's represented by a container with six rows of five fields each for the amount
  of letters for the word that needs to be guessed. 
- The 6 rows make it clear a person has only 6 guesses to find the correct word.
- Right underneath it, is the keyboard which is used to fill in the letters, it's easy to use because it represents a regular keyboard.

Developers: The page that shows the developers of the game and their contact information. [Developer Page](https://alissatroiano.github.io/8-your-heart-out/developer-page.html)
- The developer page contains 6 cards with each a photo and information about the collaborators on this project.
- At the bottom of each card are links presented to both Github and Linkedin for easy connection. 

### strategy-table 
<img width="744" alt="strategy-table" src="https://user-images.githubusercontent.com/95313496/155903746-4559849b-1152-4220-9913-2d6e0dcde8d7.png">

### colour theary 
The classic colors related to love and Valentine's Day are red and white. Red represents deep passion and respect for your loved ones, and invites us to action, motivates us, this color represents a perfect match for Valentine's Day. White stands for a new beginning. If you blend the two colors, you get the pink color that represents playfulness and that is the color of first love. And to represent detached and neutral emotions is gray.
 
Therefore, these colors have been implemented in the game Smitten. Representing a true match for the letter in the hidden word and in the correct spot, is the color: red rose; getting the correct letter, but not in the right spot is represented by the light-pink; the silver-pink shows that we don't have a match, it isn't in the hidden word or in the right spot. Finally, porcelain color is a new opportunity to know whether you get a match or not. 

![Picture1](https://user-images.githubusercontent.com/95313496/155903778-58a8a2d2-0359-4ece-9753-bc0da5dad2ba.png)


### Wireframes
![page 1 smitten](https://user-images.githubusercontent.com/95313496/155887954-bdab7e8e-5f10-4590-b0d0-8ac2d226dbf8.jpg)
![page2 smitten](https://user-images.githubusercontent.com/95313496/155887970-e389c4d2-d79c-4535-b40e-6bc74ce80b47.jpg)
![page 3 smitten](https://user-images.githubusercontent.com/95313496/155887976-252b5596-04db-4d42-8c01-ed02d46c4fd1.jpg)
![page 4 smitten](https://user-images.githubusercontent.com/95313496/155887980-cff7d907-51cb-42b8-8457-07b4303c5558.jpg)
All wireframes were created with Balsamiq wireframing software and can be viewed entirely in this document.

## Technologies Used

- [Google Fonts](https://fonts.google.com/)
- [Bootstrap 5](https://getbootstrap.com/docs/5.1/)

- 
### Languages Used

- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

HTML was used for the website/app and allows the game to to be viewed.
CSS and bootsrap to style the html and javascript.
Javascript was used to create the logic for the game.

### Libraries and Programs Used
- rapid api(https://rapidapi.com/ajith/api/love-calculator/details)

rapid api was used for the logic for the game allow us to match the two peoples names.


### Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
In the GitHub repository, navigate to the Settings tab
From the source section drop-down menu, select the Master Branch
Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here: [title](https://www.example.com)

## CREDITS

- The JavaScript logic for the game was learned from [Ani Kubow's YouTube video](https://www.youtube.com/watch?v=mpby4HiElek) and altered for this project by the development team.

- The fonts in the site were copied from [Google Fonts](https://fonts.google.com/)
  
- [Rapid API](https://rapidapi.com/) was used to find the **matchmaking API** for the game.

- Deployment description comes from [Code Institute](https://github.com/Code-Institute-Solutions/readme-template)

## ACKNOWLEDGEMENTS

- This game was built for [Code Institute's February 2022 'Love is in the Air' Hackathon](https://hackathon.codeinstitute.net/hackathon/public/17/)
