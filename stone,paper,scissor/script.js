let buttons = document.querySelectorAll(".image");
let you = document.querySelector("#score-u");
let comp = document.querySelector("#score-comp");
let msg = document.querySelector(".msg");
// console.log(buttons);

// user choice
buttons.forEach((btn) => {
  //   console.log(btn);
  btn.addEventListener("click", (e) => {
    const userChoice = btn.getAttribute("id");
    // console.log("button clicked", e.target, userChoice);
    playGame(userChoice);
  });
});

// computer random choice
const genChoice = () => {
  let opt = ["rock", "paper", "scissor"];
  const compChoice = opt[Math.floor(Math.random() * 3)];
  console.log("computer choice", compChoice);
  return compChoice;
};
const draw = () => {
  msg.style.backgroundColor = "yellow";
  msg.innerText = "Draw,Play Again";
};

const playGame = (userChoice) => {
  console.log("userchoice", userChoice);

  let compChoice = genChoice();
  if (
    (userChoice == "rock" && compChoice == "scissor") ||
    (userChoice == "paper" && compChoice == "rock") ||
    (userChoice == "scissor" && compChoice == "paper")
  ) {
    console.log("use wins");
    inc(compChoice, userChoice);
  } else if (
    (compChoice == "rock" && userChoice == "scissor") ||
    (compChoice == "paper" && userChoice == "rock") ||
    (compChoice == "scissor" && userChoice == "paper")
  ) {
    console.log("computer wins");
    incC(compChoice, userChoice);
  } else {
    console.log("draw");
    draw();
  }
  //   generate comp random choice
};
const inc = (compChoice, userChoice) => {
  let value = parseInt(you.innerText);
  value = value + 1;
  //   if (value == 3) {
  msg.style.backgroundColor = "green";
  msg.innerText = `🎉🎉Congratulation you won! ${userChoice} beats ${compChoice}`;
  // buttons.forEach((btn) => {
  //   btn.disabled = true; // enables the button
  // });
  //   }
  you.innerText = value;
};
const incC = (compChoice, userChoice) => {
  let value = parseInt(comp.innerText);
  value = value + 1;
  //   if (value == 3) {
  msg.style.backgroundColor = "red";
  msg.innerText = `😢 Oops You loose! ${compChoice} beats ${userChoice}`;
  // buttons.forEach((btn) => {
  //   btn.disabled = true; // enables the button
  // });
  //   }
  comp.innerText = value;
};
