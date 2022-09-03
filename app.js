const computerChoiceField = document.getElementById('computerChoice');
const userChoiceField = document.getElementById('userChoice');
const resultFieldDiv = document.getElementById('resultChoice');
const possibleChoices = document.querySelectorAll('.imgIcon');
console.log(possibleChoices);
console.log(userChoiceField);

let userChoice;
let computerChoice;
let resultField;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceField.innerHTML = userChoice;
    generateComputerChoice();
    checkResult();
  })
);

function generateComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    computerChoice = 'Rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'Paper';
  }
  if (randomNumber === 3) {
    computerChoice = 'Scissors';
  }

  console.log(computerChoice);
  computerChoiceField.innerHTML = computerChoice;
}

function checkResult() {
  if (computerChoice === userChoice) {
    resultField = 'Hey, Its draw';
  }
  if (computerChoice === 'Rock' && userChoice === 'Paper') {
    resultField = 'You Win';
  }
  if (computerChoice === 'Rock' && userChoice === 'Scissors') {
    resultField = 'You loose';
  }
  if (computerChoice === 'Paper' && userChoice === 'Scissors') {
    resultField = 'You Win';
  }
  if (computerChoice === 'Paper' && userChoice === 'Rock') {
    resultField = 'You loose';
  }
  if (computerChoice === 'Scissors' && userChoice === 'Rock') {
    resultField = 'You Win';
  }
  if (computerChoice === 'Scissors' && userChoice === 'Paper') {
    resultField = 'You loose';
  }
  resultFieldDiv.innerHTML = resultField;
}
