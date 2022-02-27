const x = document.getElementById('welcome');
const y = document.getElementById('game');

function pageLoad() {
	y.style.display = 'none';
}
document.getElementById("nameButton").addEventListener('click', function () {
	y.style.display = 'block';
	x.style.display = 'none';
});

// Game logic learned from https://www.youtube.com/watch?v=mpby4HiElek and customized by the development team 

const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const messageText = document.querySelector('.message-container')
const nameButton = document.getElementById('nameButton')

// const token = config.MY_API_TOKEN;
// const key = config.SECRET_API_KEY;

// document.getElementById("button").addEventListener('click', function () {
// 	const fname = document.getElementById('firstName').value;
// 	const sname = document.getElementById('secondName').value;
 

// 	return fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${fname}&fname=${sname}`, {
// 		"method": "GET",
// 		"headers": {
// 			"x-rapidapi-host": `${token}`,
// 			"x-rapidapi-key": `${key}`
// 		}
// 		})
// 		.then(response => response.json())
// 		.then(result => console.log(result))  
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


// 	A function to check if the user's guess is correct
const checkTile = () => {
	const guess = guessRows[thisRow].join('')

	// console.log(guessRows[thisRow], 'I am new')

	// Breaks check before it processes as guess -- RE
	if (guessRows[thisRow].join('').length != 5) {
		console.log("row NOT full on enter click")
		return
	}

	// Console log block for determining correctness of program function -- RE
	console.log("row FULL on enter click")
	// console.log(thisRow, "i am row")
	// console.log(guessRows, "i am guess rows")
	// console.log(guess, "i am guess")

	if (thisTile === 5) {
		addColor()
		console.log('you guessed ' + guess + '...and the word was ' + word)
		if (word == guess) {
			displayMessage("Brilliant!")
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

// // A function to add colors behind letters in the guessRows if the letters are in the words
// function addColor() {
// 	for (let i = 0; i < word.length; i++) {
// 		const tile = document.querySelector('.tile-' + thisRow + '-' + i)
// 		if (tile.textContent === word[i]) {
// 			tile.style.backgroundColor = '#00ff00'
// 		}
// 	}
// }

// A function to add colors behind letters in the guessRows if the letters are in the words
const addColor = () => {
	const rowTiles = document.querySelector('.guessRow-' + thisRow).childNodes
	rowTiles.forEach((tile, index) => {
		const tileLetter = tile.getAttribute('data')

		if (tileLetter === word[index]) {
			tile.style.backgroundColor = '#ca165e'
			tile.style.color = '#fff'
		} else if (word.includes(tileLetter)) {
			tile.style.backgroundColor = '#ffadbb'
		} else {
			tile.style.backgroundColor = '#D6D6D6'
		}
	})
}
