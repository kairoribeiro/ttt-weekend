/*-------------------------------- Constants --------------------------------*/
winningCombos = [
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]
]

resetBtnEl

/*---------------------------- Variables (state) ----------------------------*/

let  turn = 1
let winner = null
let board = [null, null, null, null, null, null, null, null, null]

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.getElementsByClassName(".cell")
const messageEl = document.getElementsByClassName(".display")

console.log(squareEls)
console.log(messageEl)
/*----------------------------- Event Listeners -----------------------------*/
resetBtnEl.addEventListener ('reset', init)


/*-------------------------------- Functions --------------------------------*/
init()

function init () {

render()
}

function render () {

}

function handleClick () {

}

function getWinner () {

}


// 1) Define the required variables used to track the state of the game


// 2) Store cached element references


// 3) Upon loading, the game state should be initialized, and a function should be 
//    called to render this game state


// 4) The state of the game should be rendered to the user


// 5) Define the required constants



// 6) Handle a player clicking a square with a `handleClick` function


// 7) Build the `getWinner` function


// 8) Create Reset functionality