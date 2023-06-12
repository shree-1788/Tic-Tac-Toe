let currPlayer = "X";
let arr = Array(9).fill(null);
let grid = document.getElementById("grid");
let result = document.getElementById("result");
let final_result = document.getElementById("final-result");
let clear_btn = document.getElementById("clear-btn");
let col = document.querySelector("col");
const checkWinner = (arr, currPlayer) => {
  if (
    (arr[0] != null && arr[0] === arr[4] && arr[4] === arr[8]) ||
    (arr[0] != null && arr[0] === arr[1] && arr[1] === arr[2]) ||
    (arr[3] != null && arr[3] === arr[4] && arr[4] === arr[5]) ||
    (arr[6] != null && arr[6] === arr[7] && arr[7] === arr[8]) ||
    (arr[0] != null && arr[0] === arr[3] && arr[3] === arr[6]) ||
    (arr[1] != null && arr[1] === arr[4] && arr[4] === arr[7]) ||
    (arr[2] != null && arr[2] === arr[5] && arr[5] === arr[8]) ||
    (arr[2] != null && arr[2] === arr[4] && arr[4] === arr[6])
  ) {
    grid.style.display = "none";
    final_result.innerText = `Winner is ${currPlayer}`;
    result.style.display = "block";

    return;
  }
};

const checkDraw = (arr) => {
  const check = arr.some((ele) => ele === null);
  if (!check) {
    grid.style.display = "none";
    final_result.innerText = `It's a DRAW`;
    result.style.display = "block";
  }
  return;
};

function handleClick(ele) {
  const id = Number(ele.id);
  if (arr[id] !== null) return;
  arr[id] = currPlayer;
  if (checkWinner(arr, currPlayer)) return;
  else checkDraw(arr, currPlayer);
  ele.innerText = currPlayer;
  currPlayer = currPlayer === "X" ? "O" : "X";
}

clear_btn.addEventListener("click", function () {
  grid.style.display = "block";
  result.style.display = "none";
  for (let i = 0; i < 9; i++) {
    const col = document.getElementById(`${i}`);
    col.innerText = "";
  }
  arr.fill(null);
  return;
});
