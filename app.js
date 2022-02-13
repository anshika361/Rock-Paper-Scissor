//caching
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userscore");
const compScore_span = document.getElementById("compscore");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
//caching done

function takeComputerChoice() {
  const choice = ["r", "p", "s"];
  const randomNo = Math.floor(Math.random() * 3);
  return choice[randomNo];
}

function convert(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissor";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML =
    // userChoice + " beats " + computerChoice + " You Win!🔥";
    `${convert(userChoice)} beats ${convert(computerChoice)}. You Win!`;
}

function lose(userChoice, computerChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML =
    // userChoice + " loses to " + computerChoice + " You Lost!😐";
    `${convert(userChoice)} loses to ${convert(computerChoice)}. You lost!`;
}

function tie(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML =
    // userChoice + " equals " + computerChoice + " It's a tie!😅";
    `${convert(userChoice)} equals ${convert(computerChoice)}. It's a tie!`;
}

function game(userChoice) {
  const computerChoice = takeComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissor_div.addEventListener("click", function () {
    game("s");
  });
}
main();
