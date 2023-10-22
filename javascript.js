const button = document.getElementById("click-me");
const tictactoeElement = document.getElementById("tic-tac-toe-grid");
const restartBtn = document.getElementById("reset-grid");

const individualCells = document.querySelectorAll('div.col');

const windowName = "Tic Tac Toe";

const windowParameters = "left=100,top=100,width=420,height=460";

const userTurnEnded = new Event('user-turn-ended');

const x = 'X';
const o = 'O';


if (button) {
  button.onclick = () =>
  window.open('./tictactoe.html', 'about', windowParameters);
}

let tictactoeGrid = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

if (restartBtn) {
  restartBtn.onclick = () => {
    for (let i = 0; i < rows.length; i++) {
      const columns = rows[i].children;
      for (let j = 0; j < columns.length; j++) {
        columns[j].innerText = '';
      }
    }
    tictactoeGrid = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  };
}

const rows = tictactoeElement.children;

function didSomeoneWin() {
  return checkHorizontal && checkVertical()
};

function checkHorizontal() {
  for (let i = 0; i < 3; i++) {
    return tictactoeGrid[i][0] !== '' 
    ? tictactoeGrid[i][0] === tictactoeGrid[i][1] 
    ? tictactoeGrid[i][0] === tictactoeGrid[i][2] 
    ? true 
    : false 
    : false 
    : false
  };
}

function checkVertical() {
  for (let j = 0; j < 3; j++) {
    return tictactoeGrid[0][j] !== ''
    ? tictactoeGrid[0][j] === tictactoeGrid[1][j]
    ? tictactoeGrid[0][j] === tictactoeGrid[2][j]
    ? true
    : false
    : false
    : false
  };
}

let i;
let j;

individualCells.forEach((cell) => {
  cell.onclick = () => {
    if (cell.innerText == '') {
      cell.innerText = x;
      i = cell.dataset.i;
      j = cell.dataset.j;
      tictactoeGrid[i][j] = x;
    }
    window.dispatchEvent(userTurnEnded);
  }
})

window.addEventListener('user-turn-ended', () => {
  const horizontalWin = checkHorizontal();
  const verticalWin = checkVertical();
  const gameOver = horizontalWin || verticalWin;
  if (gameOver) {
    alert('game over');
  }
})

// window.addEventListener('user-turn-ended', () => {
//   console.log(`AI's turn now!`);
//   for (let i = 0; i < rows.length; i++) {
//     let columns = rows[i].children;
//     grid.push(rows[i]);
//     for (let j = 0; j < columns.length; j++) {
//         if (columns[j].innerText == '') {
//           // columns[j].innerText = 'O'
//           rows[i].children[j] = 'O'
//           console.log(rows[i].children[j]);
//           // break;
//         }
//     }
//     // break;
//   }
// });
