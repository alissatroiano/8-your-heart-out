const config = ('./config');

const welcomeContainer = document.getElementById('welcome');
const gameContainer = document.getElementById('game');

function pageLoad() {
// Hide the game container until the nameButton is clicked
	gameContainer.style.display = 'none'
}
document.getElementById("nameButton").addEventListener('click', function () {
	gameContainer.style.display = 'block';
	welcomeContainer.style.display = 'none';
});

// Game logic learned from https://www.youtube.com/watch?v=mpby4HiElek and customized by the development team 

const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const messageText = document.querySelector('.message-container')
const nameButton = document.getElementById('nameButton')

const token = config.MY_API_TOKEN;
const key = config.SECRET_API_KEY;

let apiResponseData = []


// removed -- re
// document.getElementById("nameButton").addEventListener('click', async function () {
	// removed -- RE
	// const fname = document.getElementById('firstName').value;
	// const sname = document.getElementById('secondName').value;

	// removed -- re
	// const response = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${fname}&fname=${sname}`, {
	// 	"method": "GET",
	// 	"headers": {
	// 		"x-rapidapi-host": `${token}`,
	// 		"x-rapidapi-key": `${key}`
	// 	}
	// });
// 	const responseData = await response.json();
// 	console.log(responseData);
// 	return apiResponseData.push(responseData);
// });


// const word = ['LOVER']
let	isGameOver = false


async function getRandomWord() {
    let url = 'words.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        return `Error: ${error}`;
    }
}
async function getShuffledWord() {
    let data = await getRandomWord();
	const counter = data.length;
	const index = Math.floor(Math.random() * counter);
	word = data[index].toUpperCase();
	console.log(word)
	return word
}

let word = getShuffledWord();


const keys = [
	'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
	'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
	'Z', '<<', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter'
]

// console.log(keys[27])

const guessRows = [
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', '']
]

let thisRow = 0
let thisTile = 0

// A function to create a div for each guessRow in the guessRows array
guessRows.forEach((guessRow, guessRowIndex) => {
	const row = document.createElement('div')
	row.setAttribute('class', 'guessRow-' + guessRowIndex)
	tileDisplay.appendChild(row)
	guessRow.forEach((guess, guessIndex) => {
		const tile = document.createElement('div')
		tile.setAttribute('class', 'tile tile-' + guessRowIndex + '-' + guessIndex)
		tile.textContent = guess
		row.appendChild(tile)
	})
})

keys.forEach(key => {
	const buttonElement = document.createElement('button')
	buttonElement.textContent = key
	buttonElement.setAttribute('id', key)
	buttonElement.addEventListener('click', () => handleClick(key))
	keyboard.append(buttonElement)
});

const handleClick = (letter) => {
	if (letter === 'Enter') {
		checkTile()
		return
	}
	if (letter === '<<') {
		deleteTile()
		return
	}
	guessLetter(letter)
}

// A function to display letter in tile when user clicks on it
const guessLetter = (letter) => {
	if (thisTile < 5 && thisRow < 6) {
		const tile = document.querySelector('.tile-' + thisRow + '-' + thisTile)
		tile.innerHTML = letter
		guessRows[thisRow][thisTile] = letter // This line had a 0 instead of 'thisRow' -- RE
		tile.setAttribute('data', letter)
		thisTile++
		// console.log('guessRows', guessRows)
	}
}

const deleteTile = () => {
	// Prevents backspace from functioning when game is over -- RE
	if (isGameOver) {
		return
	}
	if (thisTile > 0) {
	thisTile--
	const tile = document.querySelector('.tile-' + thisRow + '-' + thisTile)
	tile.innerHTML = ''
	guessRows[0][thisTile] = ''
	tile.setAttribute('data', '')
	}
}

// Add color to keyboard
// function colorKeyboard(guessedWord) {
// 	console.log(guessedWord)
// 	let wordArray = word.split("")
// 	guessedWord.split("").forEach(addColor);
// 	function addColor(item, index) {
// 		for (i=0; i < wordArray.length; i++){

// 			// console.log(wordArray[i])
// 			// console.log(typeof(index))

// 			// if (item == wordArray[i]) {
// 			// 	console.log("I am correct11--------------------------------")
// 			// 	document.getElementById(item).style.backgroundColor = "rgb(202, 22, 94)";
// 			// } else if (index == wordArray.length-1) {
// 			// 	document.getElementById(item).style.backgroundColor = "rgb(128, 110, 112)";
// 			// }
// 		}
// 		console.log(item)
// 		// console.log(wordArray)
// 	}
// }


const checkTile = () => {
	const guess = guessRows[thisRow].join('')

	// console.log(guessRows[thisRow], 'I am new')

	// Breaks check before it processes as guess -- RE
	if (guessRows[thisRow].join('').length != 5) {
		// console.log("row NOT full on enter click")
		return
	}

	// Console log block for determining correctness of program function -- RE
	// console.log("row FULL on enter click")
	// console.log(thisRow, "i am row")
	// console.log(guessRows, "i am guess rows")
	// console.log(guess, "i am guess")

	if (thisTile === 5) {
		// colorKeyboard(guess)
		addColor()
		console.log('you guessed ' + guess + '...and the word was ' + word)
		if (word == guess) {
			displayMessage(`${apiResponseData[0].fname} you're ${apiResponseData[0].percentage}% compatible with ${apiResponseData[0].sname}`)
			console.log(apiResponseData[0].percentage);
			isGameOver = true
			return

		} else {
			if (thisRow >= 5) {
				displayMessage("Game Over!")
				isGameOver = false
				return
			}
			// moves on to the next line and adds a word of encouragement
			if (thisRow < 5) {
				displayMessage("Try Again!")
				thisRow++
				thisTile = 0
			} 
		}
	}
}

// A function to display custom message if the user's guess is right
const displayMessage = (message) => {
	const messageElement = document.createElement('p')
	messageElement.textContent = message

	console.log(typeof (messageText.lastChild))
	console.log(messageText)

	// remove repeat iterations of 'try again' -- RE
	if (messageText.children[0]) {
		messageText.children[0].remove()
	}

	messageText.appendChild(messageElement)
}

// A function to add colors behind keyboard buttons if the user clicks on letters that are in the word
const addColorKeyboard = (buttonElement, color) => {
	const letterKey = document.getElementById(buttonElement)
	letterKey.classList.add(color)
}

// A function to add colors behind letters in the guessRows if the letters are in the words
const addColor = () => {
	const row = document.querySelector('.guessRow-' + thisRow).childNodes
	let checkTile = word
	const guess = []

	row.forEach(tile => {
		guess.push({ letter: tile.getAttribute('data'), color: 'silver-overlay' })	
	})

	guess.forEach((guess, index) => {
		if (guess.letter == word[index]) {
			guess.color = "rose-overlay"
			checkTile = checkTile.replace(guess.letter, '')
	}	
})

	guess.forEach(guess => {
		if (checkTile.includes(guess.letter)) {
			guess.color = "pink-overlay"
			checkTile = checkTile.replace(guess.letter, '')
		}
	})

	row.forEach((tile, index) => {
		setTimeout(() => {
			tile.classList.add(guess[index].color)
			addColorKeyboard(guess[index].letter, guess[index].color)
		}, 500 + index)
	})
}


// remove modal
// let infoModal = document.getElementById("staticBackdrop");
// infoModal.addEventListener('click', function () {
// 	infoModal.removeAttribute("role")
// 	infoModal.setAttribute("aria-hidden", "true")
// 	infoModal.removeAttribute("aria-modal")
	
// 	console.log(document.querySelectorAll(".modal-backdrop").length)
// 	let findModalBackdrops = document.querySelectorAll(".modal-backdrop").length
// 	for (i=0; i<findModalBackdrops; i++){
// 			document.getElementsByClassName("modal-backdrop")[0].remove()
// 		}
// 	infoModal.style.display = "none"
// } )