'use strict';
//Document Object Model (DOM) Manipulation:
// Structired representation of HTML documents. It allows JavaScrtipt to access HTML Elementls and Styles to manipulate them.

// console.log(document.querySelector('.message')); // selects the entire message object
// console.log(document.querySelector('.message').textContent); //Selects just the text from the object

//Selecting and Manipulating Elements:

//SELECTING
// //Make sure to select the specific part to change, textContent changes the text part where as if you exluded textContent it would attempt to manipulate the entire object the text is in.
// console.log(document.querySelector('.message').textContent);

// //MANIPULATING
// document.querySelector('.message').textContent = '🎉 Correct Number!';
//Takes the text ontent of the message class and changes it to Correct Number

// document.querySelector('.number').textContent = 13;
// // changes number class output to 13
// document.querySelector('.score').textContent = 10;
// // changes the score class output to 10

// // the guess field is an input field, so we use VALUE to select it instead of textContent
// document.querySelector('.guess').value = 23;
// // set the value to 23
// console.log(document.querySelector('.guess').value);
// logging value to console after being changed

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

const randomNumber = () => Math.trunc(Math.random() * 20) + 1;

let secretNumber = randomNumber();
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const updateScore = newScore => {
  document.querySelector('.score').textContent = newScore;
};
const handleWin = () => {
  displayMessage('🎉 Correct Number!');
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';

  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //wHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage('⛔ No Number');

    //WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    handleWin();

    //WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      const message =
        guess > secretNumber
          ? () => displayMessage('👆 TOO HIGH!')
          : () => displayMessage('👇 TOO LOW!');
      message();
      score--;
      updateScore(score);
    } else {
      displayMessage('💥You Lost The Game!');
      updateScore(0);
    }
  }
});

//Challenge: Again Button functionality to restart the game.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = randomNumber();

  displayMessage('Start Guessing...');
  updateScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
