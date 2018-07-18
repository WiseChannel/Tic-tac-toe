
var playField = document.querySelector("#play-field");
var gameState = ['', '', '', '', '', '', '', '', ''];
var log = document.querySelector("#log");
var gameOver = false;

playField.addEventListener('click', function(event){
  var index = event.target.dataset.field;
  if(gameState[index] == '' && !gameOver) {
    event.target.style.background = "url(x.png) no-repeat";
    gameState[index] = 'x';
    checkWin('x');

    if (gameState.indexOf('') != -1 && !gameOver) {
      moveAI();
    } else {
      log.innerText = "Игра окончена. Ничья";
      gameOver = true;
    }
   
  }
}, false);

function moveAI() {
  var isCorrect = false;
  var index;

  while (!isCorrect) {
    index = Math.floor(Math.random()*9);
    if(gameState[index] == '') {
      isCorrect = true;
    }
  }

  document.querySelector(`#play-field td[data-field='${index}']`).style.background = "url(o.png) no-repeat";
  gameState[index] = 'o';
  checkWin('o');
}

function checkWin(sign) {
  if (
    (gameState[0] == gameState[1] && gameState[1] == gameState[2] && gameState[2] == sign) ||
    (gameState[3] == gameState[4] && gameState[4] == gameState[5] && gameState[5] == sign) ||
    (gameState[6] == gameState[7] && gameState[7] == gameState[8] && gameState[8] == sign) ||
    (gameState[0] == gameState[3] && gameState[3] == gameState[6] && gameState[6] == sign) ||
    (gameState[1] == gameState[4] && gameState[4] == gameState[7] && gameState[7] == sign) ||
    (gameState[2] == gameState[5] && gameState[5] == gameState[8] && gameState[8] == sign) ||
    (gameState[0] == gameState[4] && gameState[4] == gameState[8] && gameState[8] == sign) ||
    (gameState[2] == gameState[4] && gameState[4] == gameState[6] && gameState[6] == sign)
  ) {
    gameOver = true;
    log.innerText = "Игра окончена. Выиграли " + sign;
  }
}