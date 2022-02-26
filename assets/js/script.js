// Game logic learned from https://www.youtube.com/watch?v=mpby4HiElek and customized by the development team 

const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const messageText = document.querySelector('.message-container')

const word = ['LOVER']

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

// const handleInput = (input) => {
// 	console.log('input', input)
// }

keys.forEach(key => {
	const buttonElement = document.createElement('button')
	buttonElement.textContent = key
	buttonElement.setAttribute('id', key)
	buttonElement.addEventListener('click', () => handleClick(key))
	keyboard.append(buttonElement)
})

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
	console.log(guessRows[thisRow], 'I am new')

	// Breaks check before it processes as guess -- RE
	if (guessRows[thisRow].join('').length != 5){
		console.log("row NOT full on enter click")
		return
	}

	// Console log block for determining correctness of program function -- RE
	console.log("row FULL on enter click")
	// console.log(thisRow, "i am row")
	// console.log(guessRows, "i am guess rows")
	// console.log(guess, "i am guess")

	if (thisTile === 5) {
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

	console.log(typeof(messageText.lastChild))
	console.log(messageText)

	// remove repeat iterations of 'try again' -- RE
	if (messageText.children[0]) {
		messageText.children[0].remove()
	}

	messageText.appendChild(messageElement)
}

const addColor = () => {
	document.querySelector('guessRow-' + thisRow + '-' + thisTile).style.backgroundColor = 'red'
}