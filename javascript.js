const button = document.getElementById("click-me");
const tictactoeElement = document.getElementById("tic-tac-toe-grid");
const restartBtn = document.getElementById("reset-grid");
const submitBtn = document.getElementById('submit')

const individualCells = document.querySelectorAll('div.col');

const windowName = "Tic Tac Toe";

const windowParameters = "left=100,top=100,width=420,height=460";

const userTurnEnded = new Event('user-turn-ended');

const x = 'X';
const o = 'O';

if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    alert('Button Clicked!')
  })
}

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
  let nodeList = [];
  if (checkHorizontal() || checkVertical()) {
    alert('game over');
  } else {
    for (const nodes of individualCells) {
      nodeList.push(nodes);
    };
      const firstEmptyCell = nodeList.find((node) => node.innerText == '');
      tictactoeGrid[firstEmptyCell.dataset.i][firstEmptyCell.dataset.j] = o;
      firstEmptyCell.innerText = o;
  }
  if (checkHorizontal() || checkVertical()) {
    alert('game over')
  }
});
