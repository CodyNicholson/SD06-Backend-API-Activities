const snakeNames = require('snake-names')

let namePicked = snakeNames.random()

console.log('You should name this snake:', namePicked)

let femaleSnakeNames = snakeNames.female

let randomIndex = Math.floor(Math.random() * femaleSnakeNames.length)

console.log("A great female snake name is:", femaleSnakeNames[randomIndex])