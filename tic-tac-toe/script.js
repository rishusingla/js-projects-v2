let newbtn = document.querySelector(".new");
let rstbtn = document.querySelector(".reset");
let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msgcontainer");
let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((boxe) => {
  boxe.addEventListener("click", () => {
    if (turn0) {
      boxe.style.color = "red";
      boxe.innerText = "0";
      turn0 = false;
    } else {
      boxe.style.color = "green";
      boxe.innerText = "x";
      turn0 = true;
    }
    boxe.disabled = true;
    checkWinner();
  });
});
const disabledBtn = () => {
  boxes.forEach((boxe) => {
    boxe.disabled = true;
  });
};
const enabledBtn = () => {
  boxes.forEach((boxe) => {
    boxe.innerHTML = "";
    boxe.disabled = false;
  });
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disabledBtn();
  rstbtn.classList.add("hide1");
};
const checkWinner = () => {
  let winnerFound = false;
  for (let pattern of winPatterns) {
    // console.log(pattern);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner is", pos1);

        showWinner(pos1);
        winnerFound = true;
        // newGame();
      }
    }
  }

  //   Draw logic
  let allFilled = true;
  boxes.forEach((box) => {
    if (box.innerText === "") {
      allFilled = false;
    }
  });

  if (!winnerFound && allFilled) {
    msg.innerText = "It's a Draw!";
    msgcontainer.classList.remove("hide");
    // Optional: Hide reset if you want
  }
};
const resetGame = () => {
  turn0 = true;
  enabledBtn();
  msgcontainer.classList.add("hide");
  rstbtn.classList.remove("hide1");
};
// const newGame = () => {
//   boxes.forEach((box) => {
//     box.innerHTML = "";
//     box.disabled = false;
//   });
// };
newbtn.addEventListener("click", resetGame);
rstbtn.addEventListener("click", resetGame);
