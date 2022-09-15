let turn = "x";

const currentTurn = document.getElementById("currentTurn");
const restart = document.getElementById("restart");
const rB = document.getElementsByClassName("button");
var all = document.querySelectorAll(
  "#container select, #container input, #container textarea, #container button"
);

let totalTurns = 0;

function checkAnswer(clickEvent) {
  if (clickEvent.target.innerText === "_" && turn == "x") {
    clickEvent.target.innerText = "x";
    totalTurns++;
    if (totalTurns == 9) {
      currentTurn.innerText = "Draw!";
      winConditions(turn);
    } else {
      currentTurn.innerText = "It is o's turn";
      winConditions(turn);
      turn = "o";
    }
  } else if (clickEvent.target.innerText === "_" && turn == "o") {
    clickEvent.target.innerText = "o";
    totalTurns++;
    currentTurn.innerText = "It is x's turn";
    winConditions(turn);
    turn = "x";
  }
}

function winConditions(turn) {
  let winCondition = [turn, turn, turn];
  const win1 = [rB.top1.innerText, rB.top2.innerText, rB.top3.innerText];
  const win2 = [rB.mid1.innerText, rB.mid2.innerText, rB.mid3.innerText];
  const win3 = [rB.bot1.innerText, rB.bot2.innerText, rB.bot3.innerText];

  const win4 = [rB.top1.innerText, rB.mid1.innerText, rB.bot1.innerText];
  const win5 = [rB.top2.innerText, rB.mid2.innerText, rB.bot2.innerText];
  const win6 = [rB.top3.innerText, rB.mid3.innerText, rB.bot3.innerText];

  const win7 = [rB.top3.innerText, rB.mid2.innerText, rB.bot1.innerText];
  const win8 = [rB.top1.innerText, rB.mid2.innerText, rB.bot3.innerText];

  const allWinConditions = [win1, win2, win3, win4, win5, win6, win7, win8];

  for (i = 0; i < allWinConditions.length; i++) {
    if (allWinConditions[i].toString() === winCondition.toString()) {
      currentTurn.innerText = `'${turn}' wins!`;
      rB.disabled = true;
      for (let el of all) {
        el.disabled = true;
        restart.style.scale = 1.2;
      }
    }
  }
}

function restartAll() {
  const board = [top1, top2, top3, mid1, mid2, mid3, bot1, bot2, bot3];
  for (let el of all) {
    el.disabled = false;
  }
  for (let el of board) {
    el.innerText = "_";
  }
  currentTurn.innerText = "It is x's turn";
  turn = "x";
  totalTurns = 0;
  restart.style.scale = 1;
}

restart.addEventListener(`click`, restartAll);
top1.addEventListener(`click`, checkAnswer);
top2.addEventListener(`click`, checkAnswer);
top3.addEventListener(`click`, checkAnswer);
mid1.addEventListener(`click`, checkAnswer);
mid2.addEventListener(`click`, checkAnswer);
mid3.addEventListener(`click`, checkAnswer);
bot1.addEventListener(`click`, checkAnswer);
bot2.addEventListener(`click`, checkAnswer);
bot3.addEventListener(`click`, checkAnswer);
