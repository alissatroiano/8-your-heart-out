// Game logic learned from https://www.youtube.com/watch?v=mpby4HiElek and customized by the development team 

const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')

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


// A function to create a div for each guessRow in the guessRows array
guessRows.forEach(row => {
	const rowDiv = document.createElement('div')
	rowDiv.classList.add('guess-row')
	tileDisplay.appendChild(rowDiv)
	row.forEach(tile => {
		const tileDiv = document.createElement('div')
		tileDiv.classList.add('guess-tile')
		rowDiv.appendChild(tileDiv)
	})
})

const handleClick = () => {
	console.log('clicked')
}

keys.forEach(key => {
	const buttonElement = document.createElement('button')
	buttonElement.textContent = key
	buttonElement.setAttribute('id', key)
	buttonElement.addEventListener('click', handleClick)
	keyboard.append(buttonElement)
})