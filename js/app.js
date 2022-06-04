/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/
let win, tie, lose, turn, winner 
let board = []

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('div')
const messageEl = document.querySelector('h2')
const resetBtnEl = document.querySelector('button')



/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(function(square){ square.addEventListener("click", handleClick)})

resetBtnEl.addEventListener ('click', resetGame)


/*-------------------------------- Functions --------------------------------*/
init();

function init () {
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    render()
}


function render () {
    {
        getWinner();
        board.forEach(function(square, i) {
            if(square === 1) {
                squareEls[i].textContent = 'X'
            } else if(square === -1) {
                squareEls[i].textContent = 'O'
            }else {
                squareEls[i].textContent = null
            }
        })
            if(winner === null){
                messageEl.textContent = `It's ${turn === 1 ? "Player X's turn!" : "Player O's turn!"}`
            } else {messageEl.textContent = `${winner === 'T' ? "It's a tie!" : "Congrats! " + playerName() + " won!"}`
            resetBtnEl.removeAttribute('hidden')
        }
    }
}

function handleClick (evt) {
    if(board[+(evt.target.id.replace("sq",''))] !== null){
		return
	} else if(winner !== null){
		return
	} else {
		board[+(evt.target.id.replace("sq",''))] = turn
	}
	turn *= -1
	render()
}

function playerName() {
	let output;
	if (turn === 1) {
		output = 'Player O';
	} else if (turn === -1) {
		output = 'Player X';
	}
	return output;
}

function getWinner () {
    winningCombos.forEach(combo => {
        if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3){
              winner = turn
          }else if(!board.includes(null)){
              winner = 'T'
          }
      })
}

function resetGame () {
    init();
    
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