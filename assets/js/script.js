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
		guessRows[0][thisTile] = letter
		tile.setAttribute('data', letter)
		thisTile++
		console.log('guessRows', guessRows)
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

	if (thisTile > 4) {
		console.log('you guessed ' + guess + '...and the word was ' + word)
		if (word == guess) {
			displayMessage("Brilliant!")
			isGameOver = true
			return
		}
		else {
			if (thisRow >= 5) {
				isGameOver = false
				displayMessage("Game Over!")
				return
		}
		if (thisRow < 5) {
			thisRow++
			thisTile = 0
			displayMessage("Try Again!")
		}
	}
}
}

// A function to display custom message if the user's guess is right
const displayMessage = (message) => {
	const messageElement = document.createElement('p')
	messageElement.textContent = message
	messageText.appendChild(messageElement)
}