'use strict';
// ---- REFACTORED CODE ----
// Selecting Elements:
// Score Selector:
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// Player Selection
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// Dice Selectors:
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Game State Variables
// Refactored: Declared variables here but initialize them in the init function for better control
let scores, currentScore, activePlayer, playing;

// Initialize the game
const init = function () {
  // Reset game state variables
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // Reset the UI
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Refactored: Moved UI reset logic here for consistency when resetting the game
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

// Call init function to set up the game initially
// Refactored: Ensures the game starts in a reset state
init();

// Function to switch player
const switchPlayer = function () {
  // Refactored: Combined repetitive score reset logic for both players into this function
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  // Switch to the other player
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Toggle active player classes
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Only execute if the game is active
    // Generate a random dice roll (1-6)
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display the rolled dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Check if rolled 1: if true, switch to the next player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Refactored: Simplified switching logic by calling switchPlayer function
      switchPlayer();
    }
  }
});

// Hold Button Functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // Only execute if the game is active
    // Add current score to the active player's total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if the player has reached the winning score
    if (scores[activePlayer] >= 100) {
      // Refactored: Adjusted winning score to a more standard value
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Refactored: Simplified switching logic by calling switchPlayer function
      switchPlayer();
    }
  }
});

// New Game Button Functionality
btnNew.addEventListener('click', init);

/* ---- ORIGINAL CODE ----

// Selecting Elements:
// Score Selector:
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// Player Selection
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
let activePlayer = 0;
// Dice Selectors:
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Current Score
let scores = [0, 0];
let currentScore = 0;
let playing = true; // Game state variable

// Resetting to Starting Point FUNCTION
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // Reset the UI
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

// Initialize the game on page load
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling Dice Functionality:
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Only allow action if game is active
    // Generate Random Roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to Next Player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Only allow action if game is active
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score >= 100
    if (scores[activePlayer] >= 50) {
      // Finish the game
      playing = false; // Set game state to inactive
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. Switch to the next player
      switchPlayer();
    }
  }
});

//New Game
btnNew.addEventListener('click', init);
*/
