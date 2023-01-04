const player1El = document.querySelector('.player-1')
const player2El = document.querySelector('.player-2')
const player1BtnEl = document.querySelector('#player-btn-1')
const player2BtnEl = document.querySelector('#player-btn-2')
const restartBtn = document.querySelector('#restart')
let player_select = document.querySelector('#player_select')

let playerScore1 = 0
let playerScore2 = 0

let finish = 3
let gameOver = true

player1BtnEl.addEventListener('click', () => {
  if (gameOver) {
    playerScore1++
    player1El.textContent = playerScore1
    if (playerScore1 >= finish) {
      gameOver = false
      player1El.style.color = 'green'
      player2El.style.color = 'tomato'
    }
  }

})

player2BtnEl.addEventListener('click', () => {
  if (gameOver) {
    playerScore2++
    player2El.textContent = playerScore2
    if (playerScore2 >= finish) {
      gameOver = false
      player2El.style.color = 'green'
      player1El.style.color = 'tomato'
    }
  }
})

player_select.addEventListener('change', ()=>{
  finish = player_select.value
  restart()
})


restartBtn.addEventListener('click', ()=>{
  restart()
})

function restart(){
  player2El.textContent = '0'
  player1El.textContent = '0'
  player2El.style.color = 'rgb(128, 106, 255)'
  player1El.style.color = 'rgb(128, 106, 255)'
  playerScore1 = 0
  playerScore2 = 0
  gameOver = true
}