let cells = document.querySelectorAll(".row > div");
let turnCounter = 0;
console.log(cells);

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellclicked);
}

function cellclicked(event) {
  if (event.target.textContent == "") {
    if (turnCounter % 2 == 0) {
      event.target.textContent = "X";
    } else {
      event.target.textContent = "O";
    }
    turnCounter++;
    checkWin();
  }
}

const xClass = "X";
const oClass = "O";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWin() {
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
    let xCount = 0;
    let oCount = 0;

    for (let j = 0; j < WINNING_COMBINATIONS[i].length; j++) {
      if (cells[WINNING_COMBINATIONS[i][j]].textContent == "X") {
        xCount++;
      } else if (cells[WINNING_COMBINATIONS[i][j]].textContent == "O") {
        oCount++;
      }
    }

    if (xCount == 3) {
      alert("X Wins!");
    } else if (oCount == 3) {
      alert("O Wins!");
    }
  }
}

const resetButton = document.getElementById("restartButton");
function reset() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = ""
    turnCounter = 0
  }
}

resetButton.addEventListener("click", reset)